import React, { useEffect, useState } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecule/Task/index";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const AlertHandlerContext = useAlertHandlerContext();

  //データ取り出し用の新しい関数
  useEffect(() => {
    const acquiredData = localStorage.getItem("taskList");
    if (acquiredData !== null) {
      const acquiredTaskList = JSON.parse(acquiredData);
      setTaskList(acquiredTaskList);
    }
  }, []);

  //データ保存用の新しい関数
  useEffect(() => {
    const stringData = JSON.stringify(taskList);
    localStorage.setItem("taskList", stringData);
  }, [taskList]);

  //追加ボタン押したときのやつ
  const onAddTaskButtonClick = () => {
    setTaskList((taskList) => [...taskList, { name: "", initializing: true }]);
  };

  //チェックボタン押して消すとき
  const onTaskComplete = (taskIndex) => {
    const taskComplete = taskList.filter((task, index) => {
      return index !== taskIndex;
    });
    setTaskList(taskComplete);
  };

  //編集中の時の関数
  const onTaskNameChange = (taskIndex, value) => {
    if (value === "") {
      const editedTask = taskList.filter((task, index) => {
        return index !== taskIndex;
      });
      AlertHandlerContext.setAlert("タスクの名前を設定してください");
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
              defaultIsEditing={task.initializing}
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
