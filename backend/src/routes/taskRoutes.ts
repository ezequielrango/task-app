import express from 'express';
import { ICreateTask, IUpdateTask } from '../app/Tasks/Types/Task.types';
import { createTask } from '../app/Tasks/Services/createTask.service';
import { deleteTask } from '../app/Tasks/Services/deleteTask.service';
import { getAllTasks } from '../app/Tasks/Services/getAllTasks.service';
import { updateTask } from '../app/Tasks/Services/updateTask.service';
import { getTaskById } from '../app/Tasks/Services/getTaskById.service';
import { ValidationError } from '../app/common/ValidationError';

const router = express.Router();

router.get('/tasks/', async (req, res) => {
    const { query } = req.query;
    try {
        const tasks = await getAllTasks(query as string);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const task = await getTaskById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: "Error fetching task" });
    }
});



router.post('/tasks/', async (req, res) => {
    const taskData: ICreateTask = req.body;
    try {
        const newTask = await createTask(taskData);
        if (!newTask) {
            res.status(422).json({ error: "Error creating task" });
        } else {
            res.status(201).json(newTask);
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(422).json({ error: error.message });
        }
        res.status(500).json({ error: "Error creating task" });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deletedTask = await deleteTask(id);
        res.status(200).json({ message: "Tarea eliminada exitosamente.", task: deletedTask });
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(422).json({ error: error.message });
        }
        res.status(500).json({ error: "Error deleting task" });
    }
});


router.put('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const taskData: IUpdateTask = req.body;
    try {
        const updatedTask = await updateTask(id, taskData);
        res.status(201).json(updatedTask);
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(422).json({ error: error.message });
        }
        res.status(500).json({ error: "Error updating task" });
    }
});


export default router;
