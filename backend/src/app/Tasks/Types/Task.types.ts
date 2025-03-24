export interface ITask {
    id: number;
    title: string;
    description: string | null | undefined;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface ICreateTask {
    title: string;
    description?: string;
    done?: boolean;
}

export interface IUpdateTask {
    title?: string;
    description?: string;
    done?: boolean;
}


export interface ITaskRepository {
    getAllTasks(query?: string): Promise<ITask[] | null>;
    getTaskById(id: number): Promise<ITask | null>;
    getTaskByTitle(title: string): Promise<ITask | null>;
    createTask(taskData: ICreateTask): Promise<ITask | null>;
    updateTask(id: number, taskData: IUpdateTask): Promise<ITask | null>;
    deleteTask(id: number): Promise<ITask | null>;
}