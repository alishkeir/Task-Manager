import React, { useState } from "react";

const TasksPage = () => {
  const [cardForm, showCardForm] = useState(false);

  const formToggle = () => {
    showCardForm(!cardForm);
  };

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={()=>formToggle()}>+</button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center">Task Manager</h2>
          </div>
        </div>
        {cardForm&&(
        <form>
          <div className="form-group">
            <label htmlFor="title"> Task Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
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
    </div>
  );
};

export default TasksPage;
