import React from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

const ProfileBox = styled.div`
  display: flex;
  /* flex-wrap: nowrap; */

  @media screen and (min-width: 480px) {
    flex-flow: column-reverse;
    min-width: 305px;

    span {
      font-size: 1.2em;
      text-align: right;
      margin-right: 1em;
    }
  }
  @media screen and (max-width: 480px) {
    flex-flow: row;
    min-width: 100px;
    align-items: center;
  
    span {
      font-size: .8em;
      margin-left: .5em;
    }
  }
`;

const ProfileImage = styled.div`
  background-image: url(${props => props.imgUrl});
  background-position: 50% 50%;
  /* background-size: contain; */
  
  @media screen and (min-width: 480px) {
    width: 150px;
    height: 180px;
    margin: 1em auto;
    border-radius: 10px;
    box-shadow: 3px 3px 0 var(--color-black);
    /* box-shadow: 0 5px 24px 5px rgba(0, 0, 0, .15); */
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
    background-size: 35px;
    border-radius: 50%;
  }
`;

/* -------------------------------------------------------------------------- */

export default function Profile({
  imgUrl = 'http://turnyournameintoaface.com/face/01010101.png',
  userName = '',
}) {
  return (
    <ProfileBox>
      <ProfileImage imgUrl={imgUrl} />
      <span>{userName}</span>
    </ProfileBox>
  );
}