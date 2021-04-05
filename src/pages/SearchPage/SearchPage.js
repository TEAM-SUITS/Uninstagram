import React from 'react';
import styled from 'styled-components';
import Divider from 'components/Divider/Divider.styled';
import Input from 'components/Input/Input';
import PageContainer from 'containers/PageContainer/PageContainer.styled';
import useDetectViewport from 'hooks/useDetectViewport';
import { pageEffect } from 'styles/motions/variants';
import MenuContainer from 'components/MenuContainer/MenuContainer';

/* -------------------------------------------------------------------------- */

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: tomato;
  padding: 20px 30px;
  line-height: 1.5;
  text-align: center;
  text-shadow: 0px 2px 5px #00000025;

  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;
export default function SearchPage() {
  const { isMobile } = useDetectViewport();
  return (
    <PageContainer
      variants={pageEffect}
      initial="hidden"
      animate="visible"
      ismobile={'' + isMobile}
    >
      <Input
        id="postSearch"
        icon="search"
        type="search"
        placeholder="검색"
        label="검색"
        height={40}
        width={305}
      />
      <Divider color="black" margin={20} height={3} width={245} />
      <MenuContainer heading="검색하시려고요?">
        <Paragraph>
          아직 구현이 안 됐습니다.
          <br /> 불만 있으신 건 아니죠?
        </Paragraph>
      </MenuContainer>
    </PageContainer>
  );
}
