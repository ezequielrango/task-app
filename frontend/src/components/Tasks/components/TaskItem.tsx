import { Link } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text">
            <strong>Estado:</strong> {task.done ? "✅ Completada" : "⏳ Pendiente"}
          </p>
          <p className="card-text">
            <small className="text-muted">Creada: {new Date(task.createdAt).toLocaleString()}</small>
            <br />
            <small className="text-muted">Última modificación: {new Date(task.updatedAt).toLocaleString()}</small>
          </p>
          <Link to={`/task/${task.id}`} className="btn btn-primary">
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
