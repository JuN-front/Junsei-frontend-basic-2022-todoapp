import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecule/Task/index";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const todoStateTask = taskList.filter((task) => {
    return task.initializing === true;
  });

  const onAddTaskButtonClick = () => {
    setTaskList((taskList) => [...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (taskIndex) => {
    const onTaskComplete = taskList.filter((index) => {
      return index !== taskIndex;
    });
    setTaskList(onTaskComplete);
  };

  const onTaskNameChange = (taskIndex, value) => {
    let onTaskNameChange = [];
    if (value === "") {
      editedTask = taskList.filter((index) => {
        return index !== taskIndex;
      });
    } else {
      editedTask = taskList.map((task, index) => {
        if (index === taskIndex) {
          task.name = value;
        }
        return task;
      });
    }
    setTaskList(onTaskNameChange);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {todoStateTask.map((index) => (
          <StyledItem>
            <Task
              key={index}
              defaultValue={value}
              defaultIsEditing={task.initializing}
              onTaskNameChange={(value) => onTaskNameChange(index, value)}
              onTaskComplete={() => onTaskComplete(index)}
            />
          </StyledItem>
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div`
  padding: 20px;
  border-radius: 4px;
  background-color: ${COLOR.DEEP_BLUE_GRAY};
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  box-sizing: border-box;
`;

const StyledItem = styled.div`
  margin-top: 10px;
`;
