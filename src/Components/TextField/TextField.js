import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import Button from "@material-ui/core/Button";
export default function TextInput(props) {
  const dispatch = useDispatch();
  const [task, setTask] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleClick = () => {
    dispatch(addTodo(task));
  };
  return (
    <div>
      <form>
        <TextField
          id="standard-basic"
          label="Add Task"
          onChange={(e) => handleChange(e)}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Add
        </Button>
      </form>
    </div>
  );
}
