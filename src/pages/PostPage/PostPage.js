import React, { useState } from 'react';
import styled from 'styled-components';
import PostMain from 'components/PostMain/PostMain';
import Posting from 'components/Posting/Posting';

/* -------------------------------------------------------------------------- */
const StyledPostPage = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PostPage() {
  const [isWriting, setIsWriting] = useState(false);

  const toggleIsWriting = () => {
    setIsWriting(!isWriting);
  };

  return (
    <StyledPostPage>
      {isWriting ? (
        <Posting handleClick={toggleIsWriting} />
      ) : (
        <PostMain handleClick={toggleIsWriting} />
      )}
    </StyledPostPage>
  );
}
