import { useNavigate } from "react-router-dom";

interface TaskActionsProps {
  taskId: number;
  taskDone: boolean;
  onDelete: () => void;
  onToggleStatus: () => void;
}

function TaskActions({ taskId, taskDone, onDelete, onToggleStatus }: TaskActionsProps) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/task/edit/${taskId}`);
  };

  return (
    <div className="mt-3">
      <button className="btn btn-warning me-2" onClick={handleEdit}>
        ✏️ Editar
      </button>
      <button className="btn btn-info me-2" onClick={onToggleStatus}>
        {taskDone ? "⏳ Marcar como pendiente" : "✅ Marcar como completada"}
      </button>
      <button className="btn btn-danger me-2" onClick={onDelete}>
        🗑️ Eliminar
      </button>
    </div>
  );
}

export default TaskActions;
