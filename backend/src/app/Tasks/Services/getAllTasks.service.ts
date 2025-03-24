import { TaskRepository } from "../Repository/Task.repository";
import { ITask } from "../Types/Task.types";

const taskRepository = new TaskRepository();

export const getAllTasks = async (query: string = ""): Promise<ITask[] | null> => {
    try {
        return await taskRepository.getAllTasks(query);
    } catch (error) {
        throw new Error(error);
    }
};