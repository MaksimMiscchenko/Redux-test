import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/action";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./style.css";
import { Box } from "@mui/system";
import { Modal, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "linear-gradient(45deg, rgb(10, 170, 216) 38%, rgb(17, 70, 142))",
  color: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  wordWrap: "break-word",
  p: 4,
};
const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "#404dc2",
  color: "#fff",
};

const Note = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(item.id));
  };

  return (
    <div>
      <Modal
        sx={modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Заметка :
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.title}
          </Typography>
        </Box>
      </Modal>
      <li className="todo-note" key={item.id} onClick={handleOpen}>
        <p>{item.title}</p>
        <button className="ready-btn">
          <DoneIcon />
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <DeleteForeverIcon />
        </button>
      </li>
    </div>
  );
};

export default Note;
