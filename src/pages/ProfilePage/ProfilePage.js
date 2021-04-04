import React from 'react';
import styled from 'styled-components';

import HomeLogoLink from 'containers/Header/HomeLogoLink';
import Navigation from 'containers/Nav/Navigation';

import AvatarSettingBox from 'containers/AvatarSettingBox/AvatarSettingBox';
import { MotionButton } from 'components/Button/Button.styled';

/* -------------------------------------------------------------------------- */

const ProfileContainer = styled.div`
  background-color: var(--color-lightgray);
  width: 80vw;
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
`;

/* -------------------------------------------------------------------------- */

export default function ProfilePage() {
  const [userName, setUserName] = React.useState('안예인');

  return (
    <>
      <HomeLogoLink />
      <Navigation />

      <ProfileContainer>
        <h1>프로필 조회 · 수정</h1>
        <AvatarSettingBox initValue={userName} id="profileInput" />
        <MotionButton>DONE</MotionButton>
      </ProfileContainer>
    </>
  )
}