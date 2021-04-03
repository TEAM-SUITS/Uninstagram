import { ReactComponent as Spin } from 'assets/Spin.svg';
import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  width: 100px;
`;

const StyledSpinner = styled(Spin)`
`;

const LoadingText = styled.span`
  display: inline-block;
  text-align: center;
  font-weight: 700;
  margin: 1em auto;
`;

export default function Spinner() {
  return (
    <Container>
      <StyledSpinner />
      <LoadingText>로딩 중...</LoadingText>
    </Container>
  );
}
