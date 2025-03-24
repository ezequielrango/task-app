import { ValidationError } from "../../common/ValidationError";
import { TaskRepository } from "../Repository/Task.repository";
import { ITask } from "../Types/Task.types";

const taskRepository = new TaskRepository();

export const deleteTask = async (id: number): Promise<ITask | null> => {
    const existingTask = await taskRepository.getTaskById(id);
    if (!existingTask) throw new ValidationError("Tarea no encontrada.");

    return await taskRepository.deleteTask(id);
};
