import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskActions from "./TaskActions";

interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
    createdAt: string;
    updatedAt: string;
}

function TaskDetail() {
    const { id } = useParams<{ id: string }>();
    const [task, setTask] = useState<Task | null>(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    let isLoadingTask = false;
    useEffect(() => {

        const fetchTask = async () => {
            if (isLoadingTask) return;
            isLoadingTask = true;
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/tasks/${id}`);
                const data = await response.json();
                setTask(data);
            } catch (error) {
                console.error("Error fetching task:", error);
            } finally {
                isLoadingTask = false;
            }
        }
        fetchTask();
    }, [id]);
    
    const handleDelete = async () => {
        const response = await fetch(import.meta.env.VITE_API_URL + `/tasks/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            navigate("/tasks");
        } else {
            console.error("Error deleting task");
        }
    };

    const handleToggleStatus = async () => {
        if (task) {
            const updatedTask = { ...task, done: !task.done };

            const response = await fetch(import.meta.env.VITE_API_URL + `/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedTask),
            });

            if (response.ok) {
                setTask(updatedTask);
            } else {
                console.error("Error updating task status");
            }
        }
    };

    if (!task) return <p className="text-center mt-4">Cargando tarea...</p>;

    return (
        <div className="container mt-4">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="card-title text-primary">{task.title}</h2>
                    <p className="card-text">{task.description}</p>
                    <p><strong>Estado:</strong> {task.done ? "✅ Completada" : "⏳ Pendiente"}</p>
                    <p><strong>Creada:</strong> {new Date(task.createdAt).toLocaleString()}</p>
                    <p><strong>Última modificación:</strong> {new Date(task.updatedAt).toLocaleString()}</p>

                    <TaskActions
                        taskId={task.id}
                        taskDone={task.done}
                        onDelete={() => setShowModal(true)}
                        onToggleStatus={handleToggleStatus}
                    />
                </div>
            </div>

            {/* Modal de Confirmación */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex={-1} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar Eliminación</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                                <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskDetail;
