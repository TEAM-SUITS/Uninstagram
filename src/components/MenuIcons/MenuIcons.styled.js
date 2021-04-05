import styled from 'styled-components';

const StyledMenuIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  position: absolute;
  bottom: 20px;

  @media screen and (min-width: 480px) {
    width: 300px;
  }

  svg {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }

  button {
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
`;

export default StyledMenuIcons;
