const defaultState = {
  doing: [],
  done: [],
};

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_DOING":
      const { doing } = action;
      return { ...state, doing: [...state.doing, doing] };
    case "ADD_DONE":
      const { done } = action;
      return { ...state, done: [...state.done, done] };
    case "DEL_TASK":
      state.doing.splice(action.key, 1);
      return {
        ...state,
        doing: [...state.doing],
      };
    case "DEL_TASK2":
      state.done.splice(action.key, 1);
      return {
        ...state,
        done: [...state.done],
      };
    default:
      return state;
  }
};

export default tasks;
