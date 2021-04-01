import React from 'react';

/* 별명에 따른 랜덤 프로필 생성 로직--------------------------------------------------- */

const makeArrFromUtf = (nickname = ' ') => {
  // get each utf
  const charCodeArray = [...nickname].map(word => word.charCodeAt());

  return charCodeArray.map(charCode => {
    const tempArray = [...charCode + '']; // 연산할 때 reduce 쓸라고 배열로 만듦.
    return tempArray.reduce((prev, curr) => prev + curr, 0) % 18 + 1;
  });
};

// console.log(makeArrFromUtf('안예인')); // [15, 9, 17]
// console.log(makeArrFromUtf('Harry')); // [15, 8, 7, 7, 14]

const numberToString = number => (number < 10 ? '0' + number : '' + number);

const combineNumbersInArr = arr => {
  const strArr = arr.map(number => numberToString(number));
  
  let combined = strArr.reduce((prev, curr, idx) => {
    return prev + curr;
  }, '');

  while (combined.length < 8) {
    combined += '01';
  }

  const l = combined.length;

  return combined.substring(l - 8, l);
};

const getFaceUrl = combinedNumbers => `http://turnyournameintoaface.com/face/${combinedNumbers}.png`;

/* Custom Hook----------------------------------------------------------- */

export default function useBitFaceState(input = '') {
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(() => {
      const arr = makeArrFromUtf(input);
      const combinedNumbers = combineNumbersInArr(arr);
      const src = getFaceUrl(combinedNumbers);

      return src;
    });
  }, [input]);

  return url;
}
