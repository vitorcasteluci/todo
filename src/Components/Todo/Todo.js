import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { addDoing, delTask3 } from "../../actions";
import { useDispatch } from "react-redux";
import { useStyles } from "./style";
export default function Todo(props) {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const youSure = (key) => {
    if (window.confirm("You sure?") === true) {
      dispatch(delTask3(key));
    }
  };
  const classes = useStyles();
  const { item } = props;
  return (
    <div className={classes.root}>
      <h1>To Do</h1>
      {todo.map((item, key) => (
        <>
          <Card item={item} key={key}></Card>
          <button
            onClick={() => dispatch(addDoing(item), dispatch(delTask3(key)))}
          >
            Doing
          </button>

          <button onClick={() => youSure(key)}>Delete</button>
        </>
      ))}
    </div>
  );
}
