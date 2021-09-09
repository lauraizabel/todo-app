import { Task } from "../../../@types/task-type";
import api from "../../api";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await api.get("/tasks");
  return response.data;
};

export const fetchTask = async (id: number): Promise<Task> => {
  const response = await api.get(`/task/${id}`);
  return response.data;
};

export const editTask = async (task: Task): Promise<Task> => {
  const response = await api.put(`/task/${task.id}`, task);
  return response.data;
};
