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

  getRandomImg = inputValue => {
    // 랜덤 프로필 이미지 주소 생성
    const arr = makeArrFromUtf(inputValue);
    const combinedNumbers = combineNumbersInArr(arr);
    const url = getFaceUrl(combinedNumbers);

    this.setState({ imageUrl: url });
  };

  handleInput = e => {
    const value = e.target.value;

    this.setState({
      input: value,
    }, () => {
      this.getRandomImg(this.state.input);
      console.log(this.state);
    });
  };


  render() {
    return (
      <div className="container">
        <div className="placeImage">
          <figure>
            <img src={this.state.imageUrl} alt="프로필 이미지" />
          </figure>
        </div>
        <input
          id="nicknameInput"
          type="text"
          value={this.state.input}
          onChange={e => {
            this.handleInput(e);
            // this.getRandomImg();
          }}
        />
        <label htmlFor="nicknameInput">사용하실 닉네임을 입력해주세요.</label>
        <StyledButton>클릭</StyledButton>
      </div>
    );
  }
}