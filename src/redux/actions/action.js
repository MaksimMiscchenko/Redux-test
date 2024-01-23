import axios from "axios";
import {
  ADD_POST,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "../types";

const API = "http://localhost:8000/posts";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_POSTS_REQUEST });

      const res = await axios.get(API);

      dispatch({ type: GET_POSTS_SUCCESS, posts: res.data });
    } catch (error) {
      dispatch({ type: GET_POSTS_FAILURE, error });
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST });
    try {
      await axios.delete(`${API}/${id}`);
      const res = await axios.get(API);

      dispatch({ type: DELETE_POST_SUCCESS, posts: res.data });
    } catch (error) {
      dispatch({ type: DELETE_POST_FAILURE, error });
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(API, post);
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
