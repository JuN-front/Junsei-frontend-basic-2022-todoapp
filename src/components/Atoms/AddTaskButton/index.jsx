import React from "react";
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import COLOR from "../../../variables/color";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledTaskButton onClick={onClick}>
      <StyledGreenOval />
      <StyledTask>
        <img src={plus} />
        <StyledAddTask>タスクを追加</StyledAddTask>
      </StyledTask>
    </StyledTaskButton>
  );
};

export default AddTaskButton;

const StyledGreenOval = styled.div`
  background-color: ${COLOR.GREEN_TRANSPARENT};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: all 0.2s ease;
`;

const StyledAddTask = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S};
  gap: 10px;
  white-space: nowrap;
`;

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
`;

const StyledTaskButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0px;
  position: relative;
  cursor: pointer;
  & > img {
    width: 20px;
    height: 20px;
  }
  &:hover {
    ${StyledGreenOval} {
      background-color: ${COLOR.GREEN_TRANSLUCENT};
    }
  }
`;
