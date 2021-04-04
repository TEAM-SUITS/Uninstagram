import React from 'react';
import Dialog from 'components/Dialog/Dialog';
import { MotionButton } from 'components/Button/Button.styled';
import AvatarSettingBox from './AvatarSettingBox/AvatarSettingBox';

/* -------------------------------------------------------------------------- */

export default function SignInDialog({
  visible = false, // 다이얼로그 가시성 여부
}) {
  return (
    <Dialog visible={visible} infoText="Start with your avatar!">
      <AvatarSettingBox initValue="" id="dialogInput" />
      <MotionButton>DONE</MotionButton>
    </Dialog>
  );
}
