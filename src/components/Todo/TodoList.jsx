import "./TodoList.scss";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  
  const colors = [
    "90deg,#149fff,#117aff",
    "90deg,#ff7614,#ff5411",
    "90deg,#5d0cff,#9b00fa",
    "90deg,#ff0cf1,#fa0087",
  ];

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input === "") {
      alert("Please enter a todo");
      return;
    }
    setTodos([input, ...todos]);
    setInput("");
  };

  const buttonDelete = (id) => {
    const delTodos = todos.filter((item, index) => {
      return index !== id;
    });
    setTodos(delTodos);
  };

  const buttonUpdate = (iD) => {
    if (editValue === "") {
      const delTodos = todos.filter((item, index) => {
        return index !== iD;
      });
      setTodos(delTodos);
    } else {
      const updatedTodos = [...todos];
      updatedTodos[iD] = editValue;
      setTodos(updatedTodos);
      setEditIndex(null);
    }
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <div className="todo-form">
          <h1>What's the Plan for Today</h1>
          <div className="todo-content">
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              placeholder="Add todo"
              value={input}
              onChange={inputChange}
            />
            <button onClick={addTodo} className="todo-submit">
              Add
            </button>
          </div>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo-main" key={index}>
              {editIndex === index ? (
                <div className="todo-button">
                  <input
                    className="todo-input"
                    autoComplete="off"
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button
                    className="todo-submit"
                    onClick={() => buttonUpdate(index)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <div
                  className="todo-row"
                  style={{
                    backgroundImage: `linear-gradient(${
                      colors[index % colors.length]
                    })`,
                  }}
                  key={index}
                >
                  <div>{todo}</div>
                  <div className="button">
                    <FaWindowClose
                      className="button-delete"
                      onClick={() => buttonDelete(index)}
                    />
                    <AiTwotoneEdit
                      className="button-rename"
                      onClick={() => {
                        setEditIndex(index);
                        setEditValue(todo);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
