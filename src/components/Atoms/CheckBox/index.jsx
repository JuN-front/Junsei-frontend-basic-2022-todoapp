import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const AddCheckBox = ({ onClick }) => {
  return (
    <StyledCheckBox onClick={onClick}>
      <Styledcheck src={check} />
    </StyledCheckBox>
  );
};

export default AddCheckBox;

const StyledCheckBox = styled.button`
  border: 2px solid ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  border-radius: 2px;
  background: none;
  outline: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px;

  & img {
    display: none;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${StyledCheck} {
      display: block;
    }
  }
`;
