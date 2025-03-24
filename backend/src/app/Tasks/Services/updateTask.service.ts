import { ValidationError } from "../../common/ValidationError";
import { TaskRepository } from "../Repository/Task.repository";
import { IUpdateTask, ITask } from "../Types/Task.types";

const taskRepository = new TaskRepository();

export const updateTask = async (id: number, taskData: IUpdateTask): Promise<ITask | null> => {
    if (!taskData.title || taskData.title.trim().length < 3) throw new ValidationError("El título debe tener al menos 3 caracteres.");
    if (!taskData.description || taskData.description.trim().length < 5)throw new ValidationError("La descripción debe tener al menos 5 caracteres.");
    if (typeof taskData.done !== "boolean") throw new ValidationError("El campo 'done' debe ser un valor booleano.");
    const existingTask = await taskRepository.getTaskById(id);
    if (!existingTask) throw new ValidationError("Tarea no encontrada.");
    return await taskRepository.updateTask(id, taskData);
};
