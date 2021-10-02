import React from 'react';
// import useBitFaceState from 'hooks/useBitFaceState';
import styled from 'styled-components';

import Input from 'components/Input/Input';

/* -------------------------------------------------------------------------- */

// let bitFaceUrl = '';

const SignInImage = styled.img.attrs(props => ({
  src: props.avatarUrl,
  alt: '아바타',
}))`
  display: block;
  border-radius: 5px;
  margin: 0 auto 1em;
  box-shadow: 3px 3px 0 var(--color-black);
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

export default function AvatarSettingBox({
  // initValue = '',
  id,
  label,
  userName,
  avatarUrl = 'http://localhost:3000/assets/notFound.png',
  handleInput,
  handleKeyValue,
}) {
  return (
    <>
      <SignInImage avatarUrl={avatarUrl} />
      <InputContainer>
        <Input
          id={id}
          type="text"
          label={label}
          value={userName}
          width="34%"
          center={true}
          onChange={handleInput}
          onKeyUp={handleKeyValue}
        />
      </InputContainer>
    </>
  );
}
