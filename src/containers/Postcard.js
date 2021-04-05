import React from "react";
import Profile from "components/PostcardProfile/PostcardProfile.styled";
import { StyledPostcard } from "components/Postcard/Postcard.styled";

/* -------------------------------------------------------------------------- */

export const Postcard = ({ isMobile, imgUrl, userName, content = "" }) => {
  return (
    <StyledPostcard>
      <Profile imgUrl={imgUrl} userName={userName} />
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
