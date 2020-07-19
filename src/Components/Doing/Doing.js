import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { addDone, delTask } from "../../actions";
import { useDispatch } from "react-redux";
import { useStyles } from "./style";
export default function Todo(props) {
  const dispatch = useDispatch();
  const doing = useSelector((state) => state.doing);
  const youSure = (key) => {
    if (window.confirm("You sure?") === true) {
      dispatch(delTask(key));
    }
  };
  const classes = useStyles();
  const { item } = props;
  return (
    <div className={classes.root}>
      <h1>Doing</h1>
      {doing.map((item, key) => (
        <>
          <Card item={item} key={key}></Card>
          <button
            onClick={() => dispatch(addDone(item), dispatch(delTask(key)))}
          >
            Done
          </button>

          <button onClick={() => youSure(key)}>Delete</button>
        </>
      ))}
    </div>
  );
}
