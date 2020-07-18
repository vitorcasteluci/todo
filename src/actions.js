export const addDoing = (doing) => ({ type: "ADD_DOING", doing });
export const addDone = (done) => ({ type: "ADD_DONE", done });
export const addTodo = (todo) => ({ type: "ADD_TODO", todo });
export const delTask = (field, key) => ({ type: "DEL_TASK", field, key });
export const delTask2 = (key) => ({ type: "DEL_TASK2", key });
export const delTask3 = (key) => ({ type: "DEL_TASK3", key });
