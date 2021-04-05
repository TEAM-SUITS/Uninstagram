import React from 'react';
import styled from 'styled-components';
import MenuContainer from '../MenuContainer/MenuContainer';
import PropTypes from 'prop-types';

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
  margin: 6px 0;

  @media screen and (min-width: 480px) {
    font-size: 25px;
    margin: 10px 0;
  }
`;

const InlineSpan = styled.span`
  font-size: 18px;

  @media screen and (min-width: 480px) {
    font-size: 28px;
  }
`;
const BoldSpan = styled.span`
  font-weight: bold;
  @media screen and (min-width: 480px) {
    font-size: 28px;
  }
`;

const LineThrough = styled.span`
  text-decoration: line-through;
`;

const MoreMain = ({ handler }) => {
  return (
    <MenuContainer
      type="normal"
      heading="비뚤어질 대로 비뚤어진 세상"
      handler={handler}
    >
      <Div>
        <SmallerSpan>꾹 참고 있던 말들을</SmallerSpan>
        <Span>마음껏 표현해보세요.</Span>
      </Div>
      <Div>
        <BoldSpan>Uninstagram</BoldSpan>
        <InlineSpan>에서</InlineSpan>
        <br />
        <Span>
          <LineThrough>바르고 고운 말</LineThrough>은 허용되지 않습니다.
        </Span>
      </Div>
    </MenuContainer>
  );
};

MoreMain.propTypes = {
  handler: PropTypes.object.isRequired,
};

export default MoreMain;
