import React from 'react';
import toonavatar from 'cartoon-avatar';

/* 별명에 따른 랜덤 프로필 생성 로직--------------------------------------------------- */

// const makeArrFromUtf = (nickname = ' ') => {
//   // get each utf
//   const charCodeArray = [...nickname].map(word => word.charCodeAt());

//   return charCodeArray.map(charCode => {
//     const tempArray = [...charCode + '']; // 연산할 때 reduce 쓸라고 배열로 만듦.
//     return tempArray.reduce((prev, curr) => prev + curr, 0) % 18 + 1;
//   });
// };

// // console.log(makeArrFromUtf('안예인')); // [15, 9, 17]
// // console.log(makeArrFromUtf('Harry')); // [15, 8, 7, 7, 14]

// const numberToString = number => (number < 10 ? '0' + number : '' + number);

// const combineNumbersInArr = arr => {
//   const strArr = arr.map(number => numberToString(number));
  
//   let combined = strArr.reduce((prev, curr, idx) => {
//     return prev + curr;
//   }, '');

//   while (combined.length < 8) {
//     combined += '01';
//   }

//   const l = combined.length;

//   return combined.substring(l - 8, l);
// };

// const getFaceUrl = combinedNumbers => `http://turnyournameintoaface.com/face/${combinedNumbers}.png`;

/* toonavatar id generator (2021.10.02 추가) */
const genId = (nickname = '') => {
  // get each utf
  const charCodeArray = [...nickname].map(word => word.charCodeAt());

  const sum = charCodeArray.reduce((total, code) => {
    const str = code + '';
    return total + str[str.length - 1];
  }, '');

  return sum;
};

/* Custom Hook----------------------------------------------------------- */

export default function useBitFaceState(input = '') {
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(() => {
      const id = genId(input);
      const src = toonavatar.generate_avatar({
        gender: id[0] % 2 ? 'female' : 'male',
        id: id.slice(1).length
          ? +id.slice(1) === 0 ? 1 : +id.slice(1)
          : 1,
      });

      return src;
    });
  }, [input]);

  return url;
}
