import useDetectViewport from "hooks/useDetectViewport";
import { bool, number, oneOfType, string } from "prop-types";
import { StyledInput } from "./Input.styled";

const Input = ({
  id,
  icon,
  type = "text",
  name,
  label,
  placeholder,
  value,
  disabled,
  style,
  width,
  height,
  center,
  ...restProps
}) => {
  const { isMobile } = useDetectViewport();
  return (
    <StyledInput.Wrap isMobile={isMobile} height={height} width={width}>
      <StyledInput.Label htmlFor={id}>{label}</StyledInput.Label>
      <StyledInput.IconWrap>
        <StyledInput
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          style={{ textAlign: center ? "center" : "left" }}
          value={value}
          {...restProps}
        />

        {icon && (
          <StyledInput.Icon height={height - 20} type={icon} alt={label} />
        )}
      </StyledInput.IconWrap>
    </StyledInput.Wrap>
  );
};

Input.propTypes = {
  id: string.isRequired,
  icon: string,
  type: string,
  name: string,
  placeholder: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  disabled: bool,
  center: bool,
};

export default Input;
