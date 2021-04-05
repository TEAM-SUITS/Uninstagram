import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from 'redux/storage/currentUser/currentUser';
import { addCurrentUser } from 'redux/storage/currentUser/currentUser';
import useBitFaceState from 'hooks/useBitFaceState';
import Dialog from 'components/Dialog/Dialog';
import { MotionButton } from 'components/Button/Button.styled';
import AvatarSettingBox from './AvatarSettingBox/AvatarSettingBox';

/* -------------------------------------------------------------------------- */

let bitFaceUrl = '';

export default function SignInDialog({
  visible = false, // 다이얼로그 가시성 여부
}) {
  
  const { userName, avatar } = useSelector(
    state => selectCurrentUser(state)
  );
  const dispatch = useDispatch();

  const [nickName, setNickName] = React.useState('');
  bitFaceUrl = useBitFaceState(nickName);
  const handleInput = e => {
    setNickName(e.target.value);
  };

  const addUserName = () => {
    dispatch(addCurrentUser({
      userName: nickName,
      avatar: bitFaceUrl
    }));

    console.log(userName, avatar);
  };

  return (
    <Dialog visible={visible} infoText="Start with your avatar!">
      <AvatarSettingBox
        // initValue=""
        id="dialogInput"
        label="프로필 설정"
        userName={nickName}
        avatarUrl={bitFaceUrl}
        handleInput={handleInput}
      />
      <MotionButton onClick={addUserName}>DONE</MotionButton>
    </Dialog>
  );
}
