import React from "react";
import { useStyles } from "./style";
import TextFiled from "./Components/TextField/TextField";
import Todo from "./Components/Todo/Todo";
import Done from "./Components/Done/Done";
import Doing from "./Components/Doing/Doing";
function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <TextFiled></TextFiled>
        <Todo></Todo>
        <Doing></Doing>
        <Done></Done>
      </div>
    </>
  );
}

export default App;
