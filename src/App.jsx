import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Calculator from "./components/Calculator/Calculator";
import Todo from "./components/Todo/Todo";

function App() {
  

  
  return (
    <div className="d-flex justify-content-around">
      <Calculator/>
      <Todo/>
    </div>
  );
}

export default App;
