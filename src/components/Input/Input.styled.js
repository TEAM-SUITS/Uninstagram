import Icon from "components/Icon/Icon";
import styled from "styled-components";

/* -------------------------------------------------------------------------- */

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
`;

StyledInput.Label = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
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
