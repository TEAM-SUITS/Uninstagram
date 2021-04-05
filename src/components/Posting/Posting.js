import React from "react";
import styled from "styled-components";
import MenuContainer from "../MenuContainer/MenuContainer";
import { boxShadow } from "../../styles/common/common.styled";

const StyledPosting = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  position: relative;

  textarea {
    width: 100%;
    height: 12rem;
    font-size: 1.2rem;
    outline: none;
    border-radius: 10px;
    box-shadow: 0 2px 2px #00000025;
    padding: 8px;
    border: 1px solid var(--color-gray);
    resize: none;

    @media screen and (min-width: 480px) {
      height: 20rem;
      font-size: 1.5rem;
      padding: 16px;
    }
  }
  span {
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: #555;
    @media screen and (min-width: 480px) {
      bottom: 10px;
      right: 15px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  @media screen and (min-width: 480px) {
    width: 300px;
  }
`;

const StyledButton = styled.button`
  width: 80px;
  padding: 5px 0;
  font-size: 1rem;
  border-radius: 5px;
  border: 0;
  background-color: gray;
  ${boxShadow}
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 480px) {
    width: 100px;
    padding: 8px 0;
    font-size: 1.2rem;
  }
`;

const Posting = ({ content, handleCancel, handleChange, handleSubmit }) => {
  return (
    <MenuContainer heading="작성 전 유의사항">
      <StyledPosting>
        <textarea onChange={handleChange} value={content} />
        <span>{`${content.length} / 100`}</span>
      </StyledPosting>
      <ButtonContainer>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
        <StyledButton onClick={handleSubmit}>Post</StyledButton>
      </ButtonContainer>
    </MenuContainer>
  );
};

export default Posting;
