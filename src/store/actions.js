import { ADD_TODO, DELETE_TODO, FINALIZE_UPDATE, SET_TODO_INPUT, UPDATE_TODO } from "../constants/storeConstant";

export const setInputTodo = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = () => ({
  type: ADD_TODO,
});

export const updateTodo = (index) => ({
  type: UPDATE_TODO,
  index,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});

export const finalizeUpdate = () => ({
  type: FINALIZE_UPDATE,
});
