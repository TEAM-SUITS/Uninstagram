import React, { Component } from 'react';
import styled from 'styled-components';

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
console.log(makeArrFromUtf('Harry')); // [15, 8, 7, 7, 14]

const numberToString = number => (number < 10 ? '0' + number : '' + number);

const combineNumbersInArr = arr => {
  const strArr = arr.map(number => numberToString(number));
  
  let combined = strArr.reduce((prev, curr, idx) => {
    return idx <= 3 ? prev + curr : prev;
  }, '');

  while (combined.length < 8) {
    combined += '01';
  }

  return combined;
};

const getFaceUrl = combinedNumbers => `http://turnyournameintoaface.com/face/${combinedNumbers}.png`;

/* 컴포넌트---------------------------------------------------------------- */

const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  display: block;
  margin: 12px 24px;
  font-size: 1.4em;
`;

export default class BitFace extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      imageUrl: 'http://turnyournameintoaface.com/face/01010101.png',
    }
  }

  render() {
    const handleInput = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value,
      },
      console.log(this.state));
    };

    const getRandomImg = () => {
      // 랜덤 프로필 이미지 주소 생성
      const arr = makeArrFromUtf(this.state.input);
      const combinedNumbers = combineNumbersInArr(arr);
      const url = getFaceUrl(combinedNumbers);

      this.setState({ imageUrl: url });

      console.log(this.state.imageUrl);
    };

    return (
      <div className="container">
        <div className="placeImage">
          <figure>
            <img src={this.state.imageUrl} alt="임시 이미지" />
          </figure>
        </div>
        <input
          id="nicknameInput"
          type="text"
          value={this.input}
          name="input"
          onChange={handleInput}
        />
        <label htmlFor="nicknameInput">사용하실 닉네임을 입력해주세요.</label>
        <StyledButton onClick={getRandomImg}>클릭</StyledButton>
      </div>
    );
  }
}