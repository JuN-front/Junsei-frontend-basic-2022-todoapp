import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import StyledCheckBoxWrapper from "../../Atoms/Checkbox/index";
import Input from "../../Atoms/Input/index.jsx";
import StyledEditButtonWrapper from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const TaskSample = ({
  defaultValue,
  defaultIsEditing,
  OnTaskChange,
  OnTaskComplete,
}) => {
  const [isEditing, StateisEditing] = useState(defaultIsEditing);

  const OnTaskComplete = () => {
    StateisEditing(false);
    OnTaskComplete();
  };

  const OnEditButtonClick = () => {
    StateisEditing(true);
  };

  const OnEditComplete = (value) => {
    StateisEditing(false);
    OnTaskChange(value);
  };

  return (
    <StyledWrapper>
      <StyledCheckBoxWrapper onClick={OnTaskComplete} />
      {isEditing ? (
        <Input defaultValue={defaultValue} onTaskChange={OnEditComplete} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{defaultValue}</StyledTaskName>
          <StyledEditButtonWrapper onClick={OnEditButtonClick} />
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

export default TaskSample;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 2px 6px;
  width: 256px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  margin: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;
