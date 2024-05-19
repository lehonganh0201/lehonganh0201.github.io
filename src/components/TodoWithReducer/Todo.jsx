import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import { addTodo, deleteTodo, finalizeUpdate, setInputTodo, updateTodo } from "../../store/actions";
import './Todo.scss';

const Todo = ({isDarkMode}) => {
  const [state, dispatch] = useStore();

  const handleAction = () => {
    if (state.isUpdating) {
      dispatch(finalizeUpdate());
    } else {
      dispatch(addTodo());
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Nhập công việc cần làm"
        value={state.todoInput}
        onChange={(e) => dispatch(setInputTodo(e.target.value))}
      />
      <button onClick={handleAction}>
        {state.isUpdating ? "Cập nhật công việc" : "Thêm công việc"}
      </button>
      <ul>
        {state.todos.map((item, index) => (
          <li key={index}>
            <p style={{ display: "inline" }}>{item}</p>
            <button onClick={() => dispatch(deleteTodo(index))}>&times;</button>
            <button className="edit-btn" onClick={() => dispatch(updateTodo(index))}>Sửa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
