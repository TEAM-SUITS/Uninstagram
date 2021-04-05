import Icon from "components/Icon/Icon";
import styled, { css } from "styled-components";
import { a11yHidden } from "styles/common/common.styled";

export const StyledInput = styled.input`
  flex: 1;
  border: 0;
  border-radius: 5px;
  padding: 0.8em;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #ccc;
  }
  &:disabled {
    background-color: #dadada;
  }
`;

StyledInput.Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.123);
  border-radius: 5px;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  height: ${({ height }) => (height ? height + "px" : "30px")};
  width: ${({ width }) => (width ? width + "px" : "200px")};

  ${({ isMobile }) =>
    isMobile &&
    css`
      width: 100%;
    `}
`;

StyledInput.Label = styled.label`
  ${a11yHidden}
`;

StyledInput.IconWrap = styled.div`
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 100%;
`;

StyledInput.Icon = styled(Icon)`
  align-self: center;
  margin: 1em;
`;
