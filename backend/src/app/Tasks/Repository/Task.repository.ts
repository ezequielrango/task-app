import { PrismaClient } from '@prisma/client';
import { ICreateTask, IUpdateTask, ITask, ITaskRepository } from '../Types/Task.types';

const prisma = new PrismaClient();

export class TaskRepository implements ITaskRepository {

    getAllTasks = async (query: string = ""): Promise<ITask[] | null> => {
        console.log("Buscando con el query:", query); 
        try {
            return await prisma.task.findMany({
                where: {
                    OR: [
                        { title: { contains: query, mode: "insensitive" } },
                        { description: { contains: query, mode: "insensitive" } }
                    ]
                }
            });
        } catch (error) {
            throw new Error('Error fetching tasks: ' + error);
        }
    };

    getTaskByTitle = async (title: string): Promise<ITask | null> => {
        try {
            const task = await prisma.task.findFirst({
                where: { title },
            });
            return task;
        } catch (error) {
            throw new Error('Error fetching task: ' + error);
        }
    }
    

    createTask = async (taskData: ICreateTask): Promise<ITask | null> => {
        try {
            const newTask = await prisma.task.create({
                data: {
                    title: taskData.title,
                    description: taskData.description,
                    done: taskData.done,
                },
            });
            return newTask;
        } catch (error) {
            throw new Error('Error creating task: ' + error);
        }
    };

    updateTask = async (
        id: number,
        taskData: IUpdateTask
    ): Promise<ITask | null> => {
        try {
            const updatedTask = await prisma.task.update({
                where: { id },
                data: taskData,
            });
            return updatedTask;
        } catch (error) {
            throw new Error('Error updating task: ' + error);
        }
    };

    deleteTask = async (id: number): Promise<ITask | null> => {
        try {
            const deletedTask = await prisma.task.delete({
                where: { id },
            });
            return deletedTask;
        } catch (error) {
            throw new Error('Error deleting task: ' + error);
        }
    };

    getTaskById = async (id: number): Promise<ITask | null> => {
        try {
            const task = await prisma.task.findUnique({
                where: { id },
            });
            return task;
        } catch (error) {
            throw new Error('Error fetching task: ' + error);
        }
    };

}