import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <GrayCircle />
      <img pencil={pencil}></img>
    </StyledButton>
  );
};

export default SampleButton;

const GrayCircle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(184, 184, 184, 0);
  transition: all 0.2s ease;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0px;
  background-color: transparent;
  width: 20px;
  height: 20px;

  & > img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${GrayCircle} {
      background-color: rgba(184, 184, 184, 0.2);
    }
  }
`;
