import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Note from "./Note";
import Spinner from "../Other/Spinner";
import { getPosts } from "../../redux/actions/action";

const Todo = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <div className="todo">
      <div className="todo-list">
        <ul>
          {loading ? <Spinner /> : posts.map((item) => <Note item={item} />)}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
