import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/actions/action";
import { useNavigate } from "react-router-dom";
import "./style.css";

const NewNote = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ title: "" });
  const navigate = useNavigate();

  const handleInp = (e) => {
    let obj = { ...post, [e.target.name]: e.target.value };
    console.log(obj);
    setPost(obj);
  };

  const handleAdd = () => {
    dispatch(addPost(post));
    navigate("/");
  };
  return (
    <div className="note-box">
      <form>
        <h2>Добавить заметку</h2>

        <div className="note-txt">
          <input name="title" onChange={handleInp} type="text" />
        </div>
        <button className="note-btn" onClick={handleAdd}>
          Создать
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default NewNote;
