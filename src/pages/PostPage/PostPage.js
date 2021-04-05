import React from "react";
import PageContainer from "containers/PageContainer/PageContainer.styled";
import { pageEffect } from "styles/motions/variants";

/* -------------------------------------------------------------------------- */

export default function PostPage() {
  return (
    <PageContainer
      variants={pageEffect}
      initial="hidden"
      animate="visible"
    >
    </PageContainer>
  );
}
