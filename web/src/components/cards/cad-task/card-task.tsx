import React from "react";
import { Checkbox } from "@material-ui/core";
import { Task } from "../../../@types/task-type";

import { Container, ContainerDescription, ContainerDone } from "./styles";

interface CardTaskProps {
  doneTask: (id: number) => void;
  task: Task;
}

const CardTask: React.FC<CardTaskProps> = ({ doneTask, task }) => {
  return (
    <Container>
      <span>{task.id}</span>
      <ContainerDescription>
        <span>{task.description}</span>
      </ContainerDescription>
      <ContainerDone>
        <Checkbox checked={task.done} onClick={() => doneTask(task.id)} />
      </ContainerDone>
    </Container>
  );
};

export default CardTask;
