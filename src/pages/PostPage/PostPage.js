import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
import styled from 'styled-components';
import PostMain from 'components/PostMain/PostMain';
import Posting from 'components/Posting/Posting';
import useDatabase from 'hooks/useDatabase';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/storage/currentUser/currentUser';
import gownmalConverter from 'utils/Gownmal';

/* -------------------------------------------------------------------------- */
const StyledPostPage = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PostPage({ history }) {
  const [isWriting, setIsWriting] = useState(false);
  const [content, setContent] = React.useState('');
  const { submitPost } = useDatabase('posts');
  const { userName, avatar } = useSelector((state) => {
    return selectCurrentUser(state);
  });

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
    setIsWriting(!isWriting);
    const post = { userName, avatar, content: gownmalConverter(content) };
    submitPost(post);
    setContent('');
  };

  return (
    <>
      <Prompt when={content !== ''} message="기껏 쳐놓고 나갈려고요ㅇㅅㅇ?" />
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
    </>
  );
}
