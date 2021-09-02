import TaskRepository from "../../../repositories/implementations/TaskRepository";
import GetAllTaskController from "./GetAllTaskController";
import GetAllTaskUseCase from "./GetAllTaskUseCase";

const taskRepository = new TaskRepository();

const getAllTaskUseCase = new GetAllTaskUseCase(taskRepository);

const getAllTaskController = new GetAllTaskController(getAllTaskUseCase);

export default getAllTaskController;
