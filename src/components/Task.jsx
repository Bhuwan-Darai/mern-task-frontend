// import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { FaCheckDouble, FaPencil, FaTrashCan } from "react-icons/fa6";

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}</b>
        {task.name}
      </p>
      <div className="task-icons">
        <FaCheckDouble color="purple" onClick={() => setToComplete(task)} />
        <FaPencil color="green" onClick={() => getSingleTask(task)} />
        <FaTrashCan color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
