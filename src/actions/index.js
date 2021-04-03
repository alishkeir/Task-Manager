import { EDIT_TASK, CREATE_TASK, REMOVE_TASK } from "./types";
// import {  } from "./types";
import uuid from "react-uuid";

export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
};

export const createTask = ({ title, desc }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      desc,
      status: "Not Sorted",
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id
  };
};
