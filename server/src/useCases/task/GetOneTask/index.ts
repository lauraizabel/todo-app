import TaskRepository from "../../../repositories/implementations/TaskRepository";
import GetOneTaskController from "./GetOneTaskController";
import GetOneTaskUseCase from "./GetOneTaskUseCase";

const taskRepository = new TaskRepository();

const getOneTaskUseCase = new GetOneTaskUseCase(taskRepository);

const getOneTaskController = new GetOneTaskController(getOneTaskUseCase);

export default getOneTaskController;
