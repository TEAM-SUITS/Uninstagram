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
  const [content, setContent] = React.useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
    if (e.target.value.length > 100) {
      setContent(content.slice(0, 99));
    }
  };

  const handleCancel = () => {
    setContent('');
    setIsWriting(!isWriting);
  };

  const handleSubmit = () => {
    console.log(content);
    setContent('');
    setIsWriting(!isWriting);
  };

  return (
    <StyledPostPage>
      {isWriting ? (
        <Posting
          content={content}
          handleCancel={handleCancel}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <PostMain handleClick={() => setIsWriting(!isWriting)} />
      )}
    </StyledPostPage>
    // <PageContainer
    //   variants={pageEffect}
    //   initial="hidden"
    //   animate="visible"
    // >
    // </PageContainer>
  );
}
