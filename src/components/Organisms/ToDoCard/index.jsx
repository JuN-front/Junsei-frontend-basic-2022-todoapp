import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecule/Task/index";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const [savingAction, setSavingAction] = useState(false);

  //データ保存用の新しい関数
  useEffect(() => {
    const getData = JSON.stringify(taskList);
    localStorage.setItem("taskList", getData);
  }, [taskList]);

  //データ取り出し用の新しい関数
  useEffect(() => {
    const SavedData = localStorage.getItem("taskList");
    if (SavedData !== null) {
      const firstTaskList = JSON.parse(SavedData);
      setTaskList(firstTaskList);
    }
    setSavingAction(true);
  }, []);

  const onAddTaskButtonClick = () => {
    setTaskList((taskList) => [...taskList, { name: "", initializing: true }]);
    setSavingAction(false);
  };

  const onTaskComplete = (taskIndex) => {
    const taskComplete = taskList.map((task, index) => {
      if (index === taskIndex) {
        task.state = "DONE";
      }
      return task;
    });
    setTaskList(taskComplete);
  };

  const onTaskNameChange = (taskIndex, value) => {
    if (value === "") {
      const editedTask = taskList.filter((task, index) => {
        return index !== taskIndex;
      });
      setTaskList(editedTask);
    } else {
      const editedTask = taskList.map((task, index) => {
        if (index === taskIndex) {
          task.name = value;
          task.initializing = false;
        }
        return task;
      });
      setTaskList(editedTask);
      setSavingAction(false);
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <StyledItem>
            <Task
              key={index}
              defaultValue={task.name}
              defaultIsEditing={!savingAction}
              onTaskChange={(value) => onTaskNameChange(index, value)}
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
  background-color: ${COLOR.LIGHT_BLACK};
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
