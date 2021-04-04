import React from 'react';
import useBitFaceState from 'hooks/useBitFaceState';
import styled from 'styled-components';

import Input from 'components/Input/Input';

/* -------------------------------------------------------------------------- */

let bitFaceUrl = '';

const SignInImage = styled.img.attrs(() => ({
  src: bitFaceUrl,
  alt: '아바타',
}))`
  display: block;
  border-radius: 5px;
  margin: 0 auto 1em;
  box-shadow: 3px 3px 0 $BLACK;
  width: 125px;
  height: 150px;
`;

const InputContainer = styled.div`
  text-align: center;

  input {
    font-size: 1em;
    font-weight: 700;
    height: 1.2em;
  }
`;

/* -------------------------------------------------------------------------- */

export default function AvatarSettingBox({ initValue = '', id }) {

  const [userName, setUserName] = React.useState(initValue);
  bitFaceUrl = useBitFaceState(userName);

  const handleInput = e => setUserName(e.target.value);

  return (
    <>
      <SignInImage />
      <InputContainer>
        <Input
          id={id}
          type="text"
          label="현재 프로필 조회 및 수정"
          value={userName}
          width="34%"
          center={true}
          onChange={handleInput}
        />
      </InputContainer>
    </>
  );
}
