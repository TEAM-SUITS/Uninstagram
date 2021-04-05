import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
import styled from 'styled-components';
import PostMain from 'components/PostMain/PostMain';
import Posting from 'components/Posting/Posting';
// import PageContainer from 'containers/PageContainer/PageContainer.styled';
// import { pageEffect } from 'styles/motions/variants';

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
    <>
    {/* <Prompt
      when={if ()}
      message='You have unsaved changes, are you sure you want to leave?'
    /> */}
      <StyledPostPage>
        {isWriting ? (
          <Posting handleClick={toggleIsWriting} />
        ) : (
          <PostMain handleClick={toggleIsWriting} />
        )}
      </StyledPostPage>
    </>
    // <PageContainer
    //   variants={pageEffect}
    //   initial="hidden"
    //   animate="visible"
    // >
    // </PageContainer>
  );
}
