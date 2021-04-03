import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksPage from "./components/TasksPage";
import TasksList from "./components/TasksList";
const App = () => {
  return (
    <>
      <h2 className="display-4">Hello</h2>
      <TasksPage />
      <TasksList />
    </>
  );
};

export default App;
