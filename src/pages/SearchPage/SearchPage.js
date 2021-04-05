import React from "react";
import Divider from "components/Divider/Divider.styled";
import Input from "components/Input/Input";
import PageContainer from "containers/PageContainer/PageContainer.styled";
import useDetectViewport from "hooks/useDetectViewport";
import { pageEffect } from "styles/motions/variants";

/* -------------------------------------------------------------------------- */

export default function SearchPage() {
  const { isMobile } = useDetectViewport();
  return (
    <PageContainer
      variants={pageEffect}
      initial="hidden"
      animate="visible"
      isMobile={isMobile}
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
    </PageContainer>
  );
}
