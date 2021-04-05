import { Link } from "react-router-dom";
import styled from "styled-components";

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
      <Container>
        <img src="assets/notFound.png" alt="page not found" />
        <p>찾는 페이지가 없습니다.</p>
        <Link to="/">
          <p>메인으로 돌아가기</p>
        </Link>
      </Container>
    </>
  );
}
