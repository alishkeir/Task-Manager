import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
// import TasksList from "./components/TasksList";
import { connect } from "react-redux";
import { createTask, editTask,removeTask } from "./actions";

const App = (props) => {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, desc }) => {
    props.dispatch(createTask({ title, desc }));
  };

const onDeleteTask = (id)=>{
props.dispatch(removeTask(id))
}

  return (
    <>
      <TasksPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onDeleteTask={onDeleteTask}
      />
      {/* <TasksList /> */}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
