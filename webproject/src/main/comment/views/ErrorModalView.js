//GLOBAL imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
//LOCAL imports
import { Button } from "../../../common/components";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  confirmButton: {
    width: "100px",
    display: "flex",
    border: "1px solid white",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontWeight: "500",
    letterSpacing: "3px",
    padding: "5px 0",
    justifyContent: "center",
    float: "right"
  }
}));

export default function ErrorModalView(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { open, handleClose, header, text } = props;

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={open}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 id='simple-modal-title'>{header}</h2>
        <p id='simple-modal-description'>{text}</p>
        <Button
          text={"OK"}
          className={classes.confirmButton}
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
}
