import { ADD_TODO, SET_TODO_INPUT, UPDATE_TODO, DELETE_TODO,FINALIZE_UPDATE } from "../constants/storeConstant";

const initState = {
  todoInput: "",
  todos: [],
  isUpdating: false,
  updatingIndex: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
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

export { initState };
export default reducer;
