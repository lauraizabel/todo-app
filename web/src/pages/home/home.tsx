import React, { useEffect, useState } from "react";
import { useLoadingContext } from "../../contexts/loading-context/loading-context";

import { Task } from "../../@types/task-type";
import CardTask from "../../components/cards/cad-task/card-task";
import LayoutPrivate from "../../components/layout-private/layout-private";
import { editTask, fetchTasks } from "../../services/rest/task/task-rest";

import { Container, ContainerInside } from "./styles";
import NoContent from "../../components/no-content/no-content";
import Modal from "../../components/modal/modal";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoadingContext();

  const fetchAllTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  const makeDone = async (id: number) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    await editTask(newTasks[index]);
  };

  useEffect(() => {
    setLoading(true);
    fetchAllTasks();
  }, []);

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <LayoutPrivate>
      <Container>
        {!isLoading && tasks.length === 0 && (
          <NoContent onClick={toggleModal} />
        )}

        <ContainerInside>
          {tasks.map((task) => (
            <CardTask task={task} key={task.id} doneTask={makeDone} />
          ))}
        </ContainerInside>
        <Modal open={openModal} onClose={toggleModal}>
          <h1>My Modal :)</h1>
        </Modal>
      </Container>
    </LayoutPrivate>
  );
};

export default Home;
