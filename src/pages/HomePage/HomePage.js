import React from "react";
import styled from "styled-components";
import { Postcard } from "containers/Postcard";
import PageContainer from "containers/PageContainer/PageContainer.styled";
import { pageEffect } from "styles/motions/variants";


/* -------------------------------------------------------------------------- */

const FlexContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 944px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    width: 960px;
  }

  @media screen and (max-width: 944px) {
    /* display: block; */
    width: 80vw;
  }

  @media screen and (max-width: 480px) {
    width: auto;
  }
`;

/* -------------------------------------------------------------------------- */

export default function HomePage() {

  return (
    <>
      <PageContainer
        variants={pageEffect}
        initial="hidden"
        animate="visible"
      >
        <FlexContainer>
          <Postcard content="컬렉션 및 문서를 사용하여 데이터를 쉽게 구조화할 수 있습니다. 계층 구조를 만들어 관련 데이터를 저장하고 명시적인 쿼리를 사용해서 필요한 데이터를 쉽게 검색할 수 있습니다. 모든 쿼리는 데이터 세트가 아닌 결과 세트 크기에 맞게 확장되므로 첫 날부터 앱 확장 준비가 완료됩니다." />
          <Postcard content="컬렉션 및 문서를 사용하여 데이터를 쉽게 구조화할 수 있습니다. 계층 구조를 만들어 관련 데이터를 저장하고 명시적인 쿼리를 사용해서 필요한 데이터를 쉽게 검색할 수 있습니다. 모든 쿼리는 데이터 세트가 아닌 결과 세트 크기에 맞게 확장되므로 첫 날부터 앱 확장 준비가 완료됩니다." />
          <Postcard content="컬렉션 및 문서를 사용하여 데이터를 쉽게 구조화할 수 있습니다. 계층 구조를 만들어 관련 데이터를 저장하고 명시적인 쿼리를 사용해서 필요한 데이터를 쉽게 검색할 수 있습니다. 모든 쿼리는 데이터 세트가 아닌 결과 세트 크기에 맞게 확장되므로 첫 날부터 앱 확장 준비가 완료됩니다." />
          <Postcard content="컬렉션 및 문서를 사용하여 데이터를 쉽게 구조화할 수 있습니다." />
          <Postcard content="컬렉션 및 문서를 사용하여 데이터를 쉽게 구조화할 수 있습니다." />
        </FlexContainer>
      </PageContainer>
    </>
  );
}
