import React, { useEffect, useState } from "react";
import { Task } from "../../@types/task-type";
import CardTask from "../../components/cards/cad-task/card-task";
import LayoutPrivate from "../../components/layout-private/layout-private";
import { editTask, fetchTasks } from "../../services/rest/task/task-rest";

import { Container, ContainerInside } from "./styles";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchAllTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const makeDone = async (id: number) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    await editTask(newTasks[index]);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <LayoutPrivate>
      <Container>
        <ContainerInside>
          {tasks.map((task) => (
            <CardTask task={task} key={task.id} doneTask={makeDone} />
          ))}
        </ContainerInside>
      </Container>
    </LayoutPrivate>
  );
};

export default Home;
