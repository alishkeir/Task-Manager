import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  return (
    <div>
      <div class="card-header text-center font-weight-bold">{props.status}</div>

      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={props.onStatusChange}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
