import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import TaskList from "./components/Tasks/TasksList";
import TaskForm from "./components/Tasks/components/TaskForm";
import TaskDetail from "./components/Tasks/components/TaskDetail";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link> |{" "}
        <Link to="/tasks/new">New Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>App de notas Academia ForIT </h1>} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path='/task/edit/:taskid' element={<TaskForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App
