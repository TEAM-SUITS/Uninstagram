import React from 'react';
import styled from 'styled-components';
import MenuContainer from '../MenuContainer/MenuContainer';
import { boxShadow } from '../../styles/common/common.styled';

const Div = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media screen and (min-width: 480px) {
    margin-bottom: 60px;
  }
`;

const Span = styled.span`
  font-size: 18px;
  display: block;
  margin: 6px 0;

  @media screen and (min-width: 480px) {
    font-size: 28px;
    margin: 10px 0;
  }
`;

const SmallerSpan = styled.span`
  font-size: 16px;
  display: block;
  margin: 10px 0;

  @media screen and (min-width: 480px) {
    font-size: 25px;
    margin: 15px 0;
  }
`;

const BoldSpan = styled.span`
  font-weight: bold;
  @media screen and (min-width: 480px) {
    font-size: 24px;
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

const PostMain = ({ handleClick }) => {
  return (
    <MenuContainer heading="작성 전 유의사항">
      <Div>
        <SmallerSpan>마음 속에만 담아두었던 </SmallerSpan>
        <Span>그 말을 자유롭게 적어보세요.</Span>
      </Div>
      <Div>
        <SmallerSpan>단, 바르고 고운 말은</SmallerSpan>
        <Span>엄격하게 금지되어 있습니다.</Span>
        <BoldSpan>또한 글자 수는 100자로 제한됩니다.</BoldSpan>
      </Div>

      <StyledButton onClick={handleClick}>작성하기</StyledButton>
    </MenuContainer>
  );
};

export default PostMain;
