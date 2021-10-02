import React from 'react';
import styled from 'styled-components';
import PageContainer from 'containers/PageContainer/PageContainer.styled';
import useDetectViewport from 'hooks/useDetectViewport';
import { pageEffect } from 'styles/motions/variants';

import AvatarSettingBox from 'containers/AvatarSettingBox/AvatarSettingBox';
import { MotionButton } from 'components/Button/Button.styled';

import useBitFaceState from 'hooks/useBitFaceState';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentUser,
  editCurrentUser,
} from 'redux/storage/currentUser/currentUser';

import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */

const ProfileContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;

  background-color: var(--color-lightgray);
  width: 80vw;
  height: 360px;
  min-width: 300px;
  max-width: 680px;
  padding: 1em;
  border-radius: 10px;
  margin: 2em auto;

  h1 {
    margin: 1em;
    text-align: center;
    font-weight: 700;
    font-size: 1.2em;
  }

  small {
    margin: 10px 0;
    font-size: 12px;
  }
`;

/* -------------------------------------------------------------------------- */

// 초기값 url
let bitFaceUrl = '';

export default function ProfilePage() {
  const { isMobile } = useDetectViewport();

  const { userName: storedUserName } = useSelector((state) =>
    selectCurrentUser(state)
  );
  const dispatch = useDispatch();

  const [userName, setUserName] = React.useState(storedUserName);
  bitFaceUrl = useBitFaceState(userName);

  const handleKeyValue = e => {
    if (e.key === ' ') {
      console.log('공백은 안돼용👄');
      setUserName(userName.trim());
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;

    if (value.length > 12) return;

    setUserName(value);
  };

  const handleEditUser = () => {
    if (userName === storedUserName) return;
    dispatch(editCurrentUser({ userName: userName, avatar: bitFaceUrl }));
  };

  return (
    <PageContainer
      variants={pageEffect}
      initial="hidden"
      animate="visible"
      ismobile={'' + isMobile}
    >
      <ProfileContainer>
        <h1>프로필 조회 · 수정</h1>
        <AvatarSettingBox
          // initValue=""
          id="profileInput"
          label="프로필 조회 및 수정"
          userName={userName}
          avatarUrl={bitFaceUrl}
          handleInput={handleInput}
          handleKeyValue={handleKeyValue}
        />

        <small>
          닉네임은 최대 12자리까지 가능합니다.
          <span role="img" aria-label="heart">💙</span>
        </small>

        {userName === storedUserName ? null : (
          <Link to="/" style={{ color: 'inherit' }}>
            <MotionButton onClick={handleEditUser}>DONE</MotionButton>
          </Link>
        )}
      </ProfileContainer>
    </PageContainer>
  );
}
