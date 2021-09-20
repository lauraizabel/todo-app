import styled from "styled-components";

interface ContainerPropos {
  isDone: boolean;
}

export const Container = styled.div<ContainerPropos>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2e8d5;
  padding: 8px;
  border-radius: 4px;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  color: ${(props) => (props.isDone ? "#c1c1c1" : "#260273")};
  font-weight: 600;
  transition: all 0.2s ease-in-out;
`;

export const ContainerDescription = styled.div``;

export const ContainerDone = styled.div``;
