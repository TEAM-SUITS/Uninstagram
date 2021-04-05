import React from 'react';
import styled from 'styled-components';
import MenuContainer from '../MenuContainer/MenuContainer';
import PropTypes from 'prop-types';

const OL = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 4px;
    line-height: 1.2;
  }

  @media screen and (min-width: 480px) {
    li {
      font-size: 24px;
      line-height: 1.4;
      margin-bottom: 8px;
    }
  }
`;

const HowToUse = ({ handler }) => {
  return (
    <MenuContainer type="howtouse" heading="How To Use" handler={handler}>
      <OL>
        <li>1. 시작 화면에서 별명을 입력하면 아바타가 만들어집니다.</li>
        <li>
          2. 홈 탭과 검색 탭에서 다른 사람들이 작성한 글을 확인할 수 있습니다.
        </li>
        <li>
          3. 글쓰기 탭을 누르고 하고 싶은 말을 적어보세요. 바르고 고운 말을 쓰면
          필터링 처리됩니다.
        </li>
        <li>4. 프로필 탭에서 별명과 아바타를 변경할 수 있습니다.</li>
      </OL>
    </MenuContainer>
  );
};

HowToUse.propTypes = {
  handler: PropTypes.object.isRequired,
};

export default HowToUse;
