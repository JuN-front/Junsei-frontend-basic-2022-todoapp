import React from "react";
import styled from "styled-components";
import TEXTS from "../../variables/texts";
import pencil from "../../../assets/svg/pencil.svg";

const SampleButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={pencil}></img>
      <GrayCircle></GrayCircle>
    </button>
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
  background-color: rgb(184, 184, 184, 0);
  transition: all 0.2s ease;
`;

const img = styled.img`
  width: 100%;
  height: 100%;
`;

const button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0px;
  &:hover {
    ${GrayCircle} {
      background-color: rgb(184, 184, 184, 0.2);
    }
  }
`;
