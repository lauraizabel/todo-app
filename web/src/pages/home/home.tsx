import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { useLoadingContext } from "../../contexts/loading-context/loading-context";

import { Task } from "../../@types/task-type";
import CardTask from "../../components/cards/card-task/card-task";
import LayoutPrivate from "../../components/layout-private/layout-private";
import {
  createTask,
  editTask,
  fetchTasks,
} from "../../services/rest/task/task-rest";

import { Container, ContainerInside } from "./styles";
import NoContent from "../../components/no-content/no-content";
import Modal from "../../components/modal/modal";
import FormTask from "./components/form-task/form-task";
import AlertHelper from "../../utils/alert-helper";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoadingContext();

  const fetchAllTasks = async () => {
    setLoading(true);
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
    fetchAllTasks();
  }, []);

  const toggleModal = () => {
    setOpenModal(!openModal);
    fetchAllTasks();
  };

  const newTask = async (task: Task) => {
    try {
      await createTask(task);
    } catch (error: any) {
      console.log(error);
      await Swal.fire({
        title: AlertHelper.errorGenericTitle,
        text: error?.message,
        icon: "error",
      });
    }
  };

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
          <FormTask onSubmit={newTask} />
        </Modal>
      </Container>
    </LayoutPrivate>
  );
};

export default Home;
