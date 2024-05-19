import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Bootstrap from "./pages/Bootstrap/Bootstrap";
import Login from "./pages/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Todo from "./components/TodoWithReducer/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bootstrap" element={<Bootstrap/>}/>
        <Route path="/todo" element={<Todo isDarkMode={false}/>}/>
        <Route path="/darkmode" element={<Todo isDarkMode={true}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
