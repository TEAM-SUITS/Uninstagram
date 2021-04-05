import React from "react";
import styled from "styled-components";
import { Postcard } from "containers/Postcard";
import useDatabase from "hooks/useDatabase";
import PageContainer from "containers/PageContainer/PageContainer.styled";
import { pageEffect } from "styles/motions/variants";
import Spinner from "components/Spinner/Spinner.styled";

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
  const { posts, loading } = useDatabase("posts");

  return (
    <>
      <PageContainer variants={pageEffect} initial="hidden" animate="visible">
        <FlexContainer>
          {loading ? (
            <Spinner />
          ) : (
            posts &&
            posts.map((post) => (
              <Postcard
                key={post.id}
                imgUrl={post.avatarUrl}
                userName={post.user}
                content={post.content}
              />
            ))
          )}
        </FlexContainer>
      </PageContainer>
    </>
  );
}
