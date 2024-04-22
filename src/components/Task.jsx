// // import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
// import { FaCheckDouble, FaPencil, FaTrashCan } from "react-icons/fa6";

// const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
//   return (
//     <div className={task.completed ? "task completed" : "task"}>
//       <p>
//         <b>{index + 1}</b>
//         {task.name}
//       </p>
//       <div className="task-icons">
//         <FaCheckDouble color="purple" onClick={() => setToComplete(task)} />
//         <FaPencil color="green" onClick={() => getSingleTask(task)} />
//         <FaTrashCan color="red" onClick={() => deleteTask(task._id)} />
//       </div>
//     </div>
//   );
// };

// export default Task;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}</b>
        {task.name}
      </p>
      <div className="task-icons">
        <FontAwesomeIcon
          icon={faCheckDouble}
          color="purple"
          onClick={() => setToComplete(task)}
        />
        <FontAwesomeIcon
          icon={faPencilAlt}
          color="green"
          onClick={() => getSingleTask(task)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          color="red"
          onClick={() => deleteTask(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
