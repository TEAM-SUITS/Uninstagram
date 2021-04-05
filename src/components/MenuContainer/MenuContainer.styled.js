import styled from 'styled-components';
import { boxShadow } from '../../styles/common/common.styled';

const StyledMenuContainer = styled.div`
  width: 305px;
  height: 330px;
  background-color: var(--color-lightgray);
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  ${boxShadow}

  @media screen and (min-width: 944px) {
  }

  @media screen and (min-width: 480px) {
    width: 610px;
    height: 600px;
  }
`;

StyledMenuContainer.Heading = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 8px;

  @media screen and (min-width: 480px) {
    font-size: 30px;
    margin: 40px 0 20px;
  }
`;

StyledMenuContainer.Divider = styled.div`
  width: 200px;
  height: 1px;
  margin-bottom: 20px;
  background-color: var(--color-gray);

  @media screen and (min-width: 480px) {
    width: 400px;
    margin-bottom: 60px;
  }
`;

StyledMenuContainer.Content = styled.div`
  width: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
    width: 80%;
  }
`;

export default StyledMenuContainer;
