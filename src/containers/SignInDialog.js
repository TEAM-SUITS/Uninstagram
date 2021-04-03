import React from 'react';
import Dialog from 'components/Dialog/Dialog';
import { MotionButton } from 'components/Button/Button.styled';
import useBitFaceState from 'hooks/useBitFaceState';
import styled from 'styled-components';

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

export default function SignInDialog({
  visible = false, // 다이얼로그 가시성 여부
}) {
  const [userName, setUserName] = React.useState('');
  bitFaceUrl = useBitFaceState(userName);

  return (
    <Dialog visible={visible} infoText="Start with your avatar!">
      <SignInImage />
      <input
        type="text"
        value={userName}
        onChange={e => {
          setUserName(e.target.value);
        }}
      />
      <MotionButton>DONE</MotionButton>
    </Dialog>
  );
}
