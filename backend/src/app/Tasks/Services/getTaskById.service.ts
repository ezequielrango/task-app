import { TaskRepository } from "../Repository/Task.repository";
import { ITask } from "../Types/Task.types";

const taskRepository = new TaskRepository();

export const getTaskById = async (id: number): Promise<ITask | null> => {
    if (isNaN(id) || id <= 0) throw new Error("El ID de la tarea debe ser un número entero positivo.");
    try {
        return await taskRepository.getTaskById(id);
    } catch (error) {
        throw new Error("Error al obtener la tarea.");
    }
};
