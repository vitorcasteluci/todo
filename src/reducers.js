const defaultState = {
  todo: [],
  doing: [],
  done: [],
};

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { todo } = action;
      return { ...state, todo: [...state.todo, todo] };
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
    case "DEL_TASK3":
      state.todo.splice(action.key, 1);
      return {
        ...state,
        todo: [...state.todo],
      };
    default:
      return state;
  }
};

export default tasks;
