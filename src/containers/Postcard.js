import React from 'react';
import { Profile } from 'components/PostcardProfile/PostcardProfile.styled';
import { StyledPostcard } from 'components/Postcard/Postcard.styled';
​
export const Postcard = ({ content }) => {
  return (
    <StyledPostcard>
      <Profile />
      <p>{content}</p>
    </StyledPostcard>
  );
};
