import React, { useState } from "react";
import TasksList from "./TasksList";

const TASK_STATUSES = ["Not Sorted", "In Progress", "Completed"];

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const formToggle = (e) => {
    e.preventDefault();
    showCardForm(!cardForm);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDesc = (e) => {
    setDesc(e.target.value);
  };

  const resetForm = () => {
    setDesc("");
    setTitle("");
    showCardForm(false);
  };

  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      desc,
    });
    resetForm();
  };

  const renderTaskLists = () => {
    const { tasks } = props;
    return TASK_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div key={id} className="col-md-3 card m-2 p-0">
          <TasksList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
            onDeleteTask={props.onDeleteTask}
          />
        </div>
      );
    });
  };

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button
              className="btn btn-success m-3"
              onClick={(e) => formToggle(e)}
            >
              +
            </button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center">Task Manager</h2>
          </div>
        </div>
        {cardForm && (
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <label htmlFor="title"> Task Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder=""
                onChange={(e) => changeTitle(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Task Description</label>
              <textarea
                type="text"
                className="form-control"
                name="desc"
                id="desc"
                placeholder=""
                onChange={(e) => changeDesc(e)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <div
        className="row d-flex justify-content-center position-relative"
        style={{ background: "#e9ecef" }}
      >
        {renderTaskLists()}
      </div>
    </div>
  );
};

export default TasksPage;
