import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title/index";
import TodoCard from "../../Organisms/ToDoCard/index";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Title />
      <StyledTodoCard>
        <TodoCard />
      </StyledTodoCard>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const StyledTodoCard = styled.div`
  width: 100%;
  margin-top: 20px;
  max-width: 500px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 280px;
  }
`;
