import TaskRepository from "../../../repositories/implementations/TaskRepository";
import CategoryRepository from "../../../repositories/implementations/CategoryRepository";
import UpdateTaskController from "./UpdateTaskController";
import UpdateTaskUseCase from "./UpdateTaskUseCase";

const taskRepository = new TaskRepository();
const categoryRepository = new CategoryRepository();

const updateTaskUseCase = new UpdateTaskUseCase(
  taskRepository,
  categoryRepository
);

const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export default updateTaskController;
