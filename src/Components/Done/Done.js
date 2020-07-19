import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { addTodo, delTask2 } from "../../actions";
import { useDispatch } from "react-redux";
import { useStyles } from "./style";
export default function Todo(props) {
  const dispatch = useDispatch();
  const done = useSelector((state) => state.done);
  const youSure = (key) => {
    if (window.confirm("You sure?") === true) {
      dispatch(delTask2(key));
    }
  };
  const classes = useStyles();
  const { item } = props;
  return (
    <div className={classes.root}>
      <h1>Done</h1>
      {done.map((item, key) => (
        <>
          <Card item={item} key={key}></Card>
          <button
            onClick={() => dispatch(addTodo(item), dispatch(delTask2(key)))}
          >
            To do
          </button>
          <button onClick={() => youSure(key)}>Delete</button>
        </>
      ))}
    </div>
  );
}
