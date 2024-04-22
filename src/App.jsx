import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import UseRef from "./components/UseRef/UseRef";
import UseMemo from "./components/UseMemo/UseMeMo";
import Memo from "./components/Memo/Memp";
import TodoList from "./components/Todo/TodoList";
import Counter from "./components/Counter/Counter";
import Memp from "./components/Memo/Memp";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserProfileForm from "./components/UserProfileForm/UserProfileForm";
function App() {

  // const [count, setCount] = useState(0);
  // const increment = useCallback(() => setCount(pre => pre + 1),[]);
  return (
    <>
      {/* <UseRef />
      <UseMemo />
    
      <Memo onIncrementT={increment}/>
      <b>{count}</b><br/> */}

      {/* <TodoList/> */}

      {/* <Counter/> */}


      {/* <Register/> */}
      <Login/>


      {/* <p>{count}</p>

      <Memp onIncrement={increment}/> */}

      {/* <UserProfileForm/> */}
    </>
  );
}

export default App;
