import React from "react";
import { useStyles } from "./style";
import Card from "./Components/Card/Card";
import TextFiled from "./Components/TextField/TextField";
import { useSelector } from "react-redux";
import { delTask, delTask2, addDone, addDoing } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const classes = useStyles();
  const doing = useSelector((state) => state.doing);
  const done = useSelector((state) => state.done);
  const dispatch = useDispatch();

  const youSure = (key) => {
    if (window.confirm("You sure?") === true) {
      dispatch(delTask(key));
    }
  };

  const youSure2 = (key) => {
    if (window.confirm("You sure?") === true) {
      dispatch(delTask2(key));
    }
  };

  return (
    <>
      <div className={classes.container}>
        <TextFiled></TextFiled>
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

              <button onClick={(key) => youSure(key)}>Delete</button>
            </>
          ))}
        </div>
        <div className={classes.root}>
          <h1>Done</h1>
          {done.map((item, key) => (
            <>
              <Card item={item} key={key}></Card>
              <button
                onClick={() =>
                  dispatch(addDoing(item), dispatch(delTask2(key)))
                }
              >
                Doing
              </button>
              <button onClick={(key) => youSure2(key)}>Delete</button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
