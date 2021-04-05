import React from 'react';
import useBitFaceState from 'hooks/useBitFaceState';
import Dialog from 'components/Dialog/Dialog';
import { MotionButton } from 'components/Button/Button.styled';
import AvatarSettingBox from './AvatarSettingBox/AvatarSettingBox';

/* -------------------------------------------------------------------------- */

let bitFaceUrl = '';

export default function SignInDialog({
  visible = false, // 다이얼로그 가시성 여부
}) {
  
  const [userName, setUserName] = React.useState('');
  bitFaceUrl = useBitFaceState(userName);
  const handleInput = e => {
    setUserName(e.target.value);
  }

  return (
    <Dialog visible={visible} infoText="Start with your avatar!">
      <AvatarSettingBox
        // initValue=""
        id="dialogInput"
        label="프로필 설정"
        userName={userName}
        avatarUrl={bitFaceUrl}
        handleInput={handleInput}
      />
      <MotionButton>DONE</MotionButton>
    </Dialog>
  );
}
