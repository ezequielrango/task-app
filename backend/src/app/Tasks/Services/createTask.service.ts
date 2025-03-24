import { ValidationError } from "../../common/ValidationError";
import { TaskRepository } from "../Repository/Task.repository";
import { ICreateTask, ITask } from "../Types/Task.types";


const taskRepository = new TaskRepository();

export const createTask = async (taskData: ICreateTask): Promise<ITask | null> => {
    if (!taskData.title || taskData.title.trim().length < 3) throw new ValidationError("El título debe tener al menos 3 caracteres.");
    if (!taskData.description || taskData.description.trim().length < 5) throw new ValidationError("La descripción debe tener al menos 5 caracteres.");
    if (typeof taskData.done !== "boolean") throw new ValidationError("El campo 'done' debe ser un valor booleano.");
    const existingTask = await taskRepository.getTaskByTitle(taskData.title);
    if (existingTask) throw new ValidationError("Ya existe una tarea con ese título.");

    return await taskRepository.createTask(taskData);
};
