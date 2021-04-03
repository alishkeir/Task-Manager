import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
import TasksList from "./components/TasksList";
const App = () => {
  return (
    <>
      <TasksPage />
      <TasksList />
    </>
  );
};

export default App;
