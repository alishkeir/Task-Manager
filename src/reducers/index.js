import { CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "../actions/types";

const initialState = [
  // {
  //   id: 1,
  //   title: "task 1",
  //   desc: "task  1 description",
  //   status: "Not Sorted",
  // },
  // {
  //   id: 2,
  //   title: "task 2",
  //   desc: "task  2 description",
  //   status: "In Progress",
  // },
  // {
  //   id: 3,
  //   title: "task 3",
  //   desc: "task  3 description",
  //   status: "Completed",
  // },
];

const tasks = (state = { tasks: initialState }, action) => {
  switch (action.type) {
    case EDIT_TASK: {
      const { payload } = action;

      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
