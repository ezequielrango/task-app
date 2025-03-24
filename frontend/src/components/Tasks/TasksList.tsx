import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import { useNavigate } from "react-router-dom";

interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
    createdAt: string;
    updatedAt: string;
}

let isLoadingTasks = false;

function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [showCompleted, setShowCompleted] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchTasks = async () => {
            if (isLoadingTasks) return;
            setIsLoading(true); 
            isLoadingTasks = true;
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/tasks?query=${searchQuery}`
                );
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                isLoadingTasks = false;
                setIsLoading(false); 
            }
        };

        fetchTasks();
    }, [searchQuery]); 


    const filteredTasks = tasks.filter((task) =>
        showCompleted ? task.done : !task.done
    );

    return (
        <div className="container mt-4">
            <h2 className="text-primary">Lista de Tareas</h2>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por título o descripción"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="form-check form-switch mb-3 w-25">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="filterSwitch"
                    checked={showCompleted}
                    onChange={() => setShowCompleted(!showCompleted)}
                />
                <label className="form-check-label" htmlFor="filterSwitch">
                    {showCompleted ? "Mostrar Pendientes" : "Mostrar Completadas"}
                </label>
            </div>

            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : filteredTasks.length === 0 ? (
                <div className="text-center mt-4">
                    <p>No hay tareas encontradas con esos parámetros.</p>
                    <p>Puedes crear una nueva tarea.</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/tasks/new")}
                    >
                        Crear Tarea
                    </button>
                </div>
            ) : (

                <div className="row">
                    {filteredTasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;
