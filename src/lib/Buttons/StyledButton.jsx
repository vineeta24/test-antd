import { Button } from "antd";
import Styled, { css } from "styled-components";

const StyledButton = Styled(Button)`
  height: auto;
  padding: 12px 25px;
  font: ${(props) => props.theme.font.btnFont};
  background-color: #ffffff;
  border: 1px solid #c3d2de;
  color: #00264a;
  text-shadow: none;
  box-shadow: none;

  :hover {
    background-color: #dae5ed;
    border: 1px solid #dae5ed;
    color: #00264a;
  }

  :focus {
    background-color: #ffffff;
    border: 1px solid #80c4ff;
    color: #00264a;
  }

  :disabled {
    background-color: #DAE5ED;
    color: #95ADBF;
  }
  
  ${({ type }) =>
    type === "primary" &&
    css`
      background-color: #0075e3;
      border: 1px solid #0075e3;
      color: #ffffff;

      :hover {
        background-color: #0d8aff;
        color: #ffffff;
      }

      :focus {
        background-color: #0075e3;
        border: 1px solid #80c4ff;
        color: #ffffff;
      }
    `}

    ${({ size }) =>
      size === "small" &&
      css`
        font: normal normal normal 12px/14px Roboto;
        padding: 5px 15px;

        :focus {
          padding: 5px 15px;
          border: 1px solid #80c4ff;
        }
      `}

`;

export default StyledButton;
