import React from "react";
import StyledButton from "./StyledButton";

StyledButton.defaultProps = {
    theme: {
      font: {
        btnFont: "normal normal normal 11px/13px Roboto",
      }
    }
}

const TextButton = ({
  type,
  size = "middle",
  onClick,
  children,
  disabled,
  style,
  reference,
  ...rest
}) => {
  return (
    <StyledButton
      style={style}
      type={type}
      size={size}
      onClick={onClick}
      disabled={disabled}
      ref={reference}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default TextButton;
