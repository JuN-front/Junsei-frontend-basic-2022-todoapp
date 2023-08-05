import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ visible, errorText }) => {
  return (
    <StyledAlert>
      <StyledAlertText className={visible ? "fadeIn" : "fadeOut"}>
        {errorText}
      </StyledAlertText>
    </StyledAlert>
  );
};

export default Alert;

const StyledAlert = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
  }
  .fadeIn {
    transform: translateY(0);
    opacity: 1;
  }
  .fadeOut {
    transform: translateY(-30px);
    opacity: 0;
  }
`;

const StyledAlertText = styled.p`
  width: 400px;
  z-index: 1;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  ${TEXT.S};
  height: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.2s ease;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
  }
`;
