import {
  ADD_POST,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts };
    case GET_POSTS_FAILURE:
      return { ...state, error: action.error };
    case DELETE_POST_REQUEST:
      return { ...state, loading: true };
    case DELETE_POST_SUCCESS:
      return { ...state, loading: false, posts: action.posts };
    case DELETE_POST_FAILURE:
      return { ...state, error: action.error };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
export default postsReducer;
