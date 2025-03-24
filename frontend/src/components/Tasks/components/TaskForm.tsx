import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa los estilos de Toastify

function TaskForm() {
    const { taskid } = useParams<{ taskid?: string }>();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [done, setDone] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errors, setErrors] = useState<any>({});  // Para almacenar los errores
    const navigate = useNavigate();

    const fetchTask = async () => {
        if (!taskid) return;
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + `/tasks/${taskid}`);
            if (response.ok) {
                const data = await response.json();
                setTitle(data.title || "");
                setDescription(data.description || "");
                setDone(data.done ?? false);
            } else {
                toast.error("Error fetching task: " + response.statusText);
            }
        } catch (error) {
            toast.error("Error fetching task: " + error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (taskid) {
            fetchTask();
        } else {
            setIsLoading(false);
        }
    }, [taskid]);

    // Validaciones de los datos del formulario
    const validateForm = () => {
        const errors: any = {};
        if (title.trim().length < 3) {
            errors.title = "El título debe tener al menos 3 caracteres";
        }
        if (description.trim().length < 5) {
            errors.description = "La descripción debe tener al menos 5 caracteres";
        }
        if (!title.trim()) {
            errors.title = "El título es obligatorio";
        }
        if (!description.trim()) {
            errors.description = "La descripción es obligatoria";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Si no hay errores, el formulario es válido
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar antes de enviar el formulario
        if (!validateForm()) {
            return;
        }

        const method = taskid ? "PUT" : "POST";
        const url = taskid
            ? import.meta.env.VITE_API_URL + `/tasks/${taskid}`
            : import.meta.env.VITE_API_URL + "/tasks";

        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, done }),
            });

            if (response.ok) {
                navigate("/tasks");
                toast.success(taskid ? "Tarea actualizada exitosamente." : "Tarea guardada exitosamente.");
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || "Error saving task");
            }
        } catch (error) {
            toast.error("Error saving task: " + error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-primary">{taskid ? "Editar Tarea" : "Nueva Tarea"}</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input
                        type="text"
                        className={`form-control ${errors.title ? "is-invalid" : ""}`}
                        placeholder="Título de la tarea"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                        placeholder="Describe la tarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>

                <div className="form-check form-switch mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="doneSwitch"
                        checked={done}
                        onChange={(e) => setDone(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="doneSwitch">
                        {done ? "✅ Completada" : "⏳ Pendiente"}
                    </label>
                </div>

                <button type="submit" className="btn btn-success me-2">
                    {taskid ? "Actualizar" : "Guardar"}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate("/tasks")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
