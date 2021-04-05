import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeLogoLink from 'containers/Header/HomeLogoLink';
import Navigation from 'containers/Nav/Navigation';

/* -------------------------------------------------------------------------- */

const Container = styled.div`
  background-color: var(--color-lightgray);
  width: 50vw;
  border-radius: 10px;
  margin: 10vh auto;
  padding: 2em 2em 1.2em;
  text-align: center;

  img {
    width: 80%;
  }

  p {
    font-size: 1.4em;
    font-weight: 700;
  }

  p:last-child {
    color: var(--color-darkgray);
  }
`;

export default function PageNotFound() {
  return (
    <>
      <HomeLogoLink />
      <Navigation />
      <Container>
        <img src="assets/notFound.png" alt="page not found" />
        <p>찾는 페이지가 없습니다.</p>
        <Link to="/"><p>메인으로 돌아가기</p></Link>
      </Container>
    </>
  )
}