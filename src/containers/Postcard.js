import React from 'react';
import Profile from 'components/PostcardProfile/PostcardProfile.styled';
import { StyledPostcard } from 'components/Postcard/Postcard.styled';

/* -------------------------------------------------------------------------- */

export const Postcard = ({ isMobile, content = '' }) => {
  return (
    <StyledPostcard>
      <Profile
        imgUrl='http://turnyournameintoaface.com/face/01010101.png'
        userName='안예인짱짱맨'
      />
      {isMobile ? (
        <p>{content}</p>
      ) : (
        <div className="contents">
          <div className="bubble">
            <p>{content}</p>
          </div>
          <div className="tail"></div>
        </div>
      )}
    </StyledPostcard>
  );
};
