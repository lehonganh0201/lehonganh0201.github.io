import React, { useReducer } from "react";

// useReducer
// 1. init State
const initState = {
  todoInput: "",
  todos: [],
  isUpdating: false,
  updatingIndex: null,
};
// 2. actions
const SET_INPUT_VALUE = "set_input_value";
const ADD_TODO = "add";
const UPDATE_TODO = "update";
const DELETE_TODO = "delete";
const FINALIZE_UPDATE = "finalize_update";

const setTodo = (payload) => ({
  type: SET_INPUT_VALUE,
  payload,
});

const addTodo = () => ({
  type: ADD_TODO,
});

const updateTodo = (index) => ({
  type: UPDATE_TODO,
  index,
});

const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});

const finalizeUpdate = () => ({
  type: FINALIZE_UPDATE,
});
// 3. reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    case UPDATE_TODO: {
      return {
        ...state,
        todoInput: state.todos[action.index],
        isUpdating: true,
        updatingIndex: action.index,
      };
    }
    case DELETE_TODO: {
      const updatedTodos = [...state.todos];
      updatedTodos.splice(action.index, 1);
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case FINALIZE_UPDATE: {
      const updatedTodos = [...state.todos];
      updatedTodos[state.updatingIndex] = state.todoInput;
      return {
        ...state,
        todos: updatedTodos,
        todoInput: "",
        isUpdating: false,
        updatingIndex: null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
};
// 4. dispatch

function Todo() {
  const [todo, dispatch] = useReducer(reducer, initState);

  const handleAction = () => {
    if (todo.isUpdating) {
      dispatch(finalizeUpdate());
    } else {
      dispatch(addTodo());
    }
  };

  return (
    <div className="app">
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo.todoInput}
        onChange={(e) => dispatch(setTodo(e.target.value))}
      />
      <button onClick={handleAction}>
        {todo.isUpdating ? "Update todo" : "Add todo"}
      </button>

      <ul>
        {todo?.todos &&
          todo.todos.map((item, index) => (
            <li key={index}>
              <p style={{ display: "inline" }}>{item}</p>
              <button onClick={() => dispatch(deleteTodo(index))}>
                &times;
              </button>
              <button onClick={() => dispatch(updateTodo(index))}>
                Sửa
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
