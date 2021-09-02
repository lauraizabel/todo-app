import TaskRepository from "../../../repositories/implementations/TaskRepository";
import CategoryRepository from "../../../repositories/implementations/CategoryRepository";
import UserRepository from "../../../repositories/implementations/UserRepository";
import CreateTaskController from "./CreateTaskController";
import CreateTaskUseCase from "./CreateTaskUseCase";

const taskRepository = new TaskRepository();
const categoryRepository = new CategoryRepository();
const userRepository = new UserRepository();

const createTaskUseCase = new CreateTaskUseCase(
  taskRepository,
  categoryRepository,
  userRepository
);

const createTaskController = new CreateTaskController(createTaskUseCase);

export default createTaskController;
