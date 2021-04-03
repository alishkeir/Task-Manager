import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TASK_STATUSES = ["Not Sorted", "In Progress", "Completed"];

const Task = (props) => {
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }

  function onDeleteTask() {
    props.onDeleteTask(props.task.id);
  }

  return (
    <>
      <form onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASK_STATUSES.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </form>
      <h3 className="card-title mt-3 px-2" style={{ color: "#3a4" }}>
        {props.task.title}
      </h3>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">
        {props.task.desc}
      </p>
      <FontAwesomeIcon
        icon={faTrash}
        className="float-right m-5"
        style={{ color: "tomato", cursor: "pointer" }}
        onClick={()=>onDeleteTask(props.task.id)}
      />
    </>
  );
};

export default Task;
