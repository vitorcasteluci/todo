import React from "react";
import { useStyles } from "./style";
import Card from "./Components/Card/Card";
import TextFiled from "./Components/TextField/TextField";
import { useSelector } from "react-redux";
import { delTask, delTask2, addDone, addDoing } from "./actions";
import { useDispatch } from "react-redux";
import Modal from "@material-ui/core/Modal";
function App() {
  const classes = useStyles();
  const doing = useSelector((state) => state.doing);
  const done = useSelector((state) => state.done);
  const dispatch = useDispatch();

  // Modal
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //

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
              <button onClick={handleOpen}>Delete</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div style={modalStyle} className={classes.paper}>
                  <h2 id="simple-modal-title">You Sure?</h2>
                  <button onClick={(key) => dispatch(delTask(key))}>
                    Delete
                  </button>
                </div>
              </Modal>
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
              <button onClick={() => dispatch(delTask2(key))}>Delete</button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
