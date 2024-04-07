import { useEffect, useState } from "react";
import axios from "axios";
import UseRef from "./components/UseRef/UseRef";
import UseMemo from "./components/UseMemo/UseMeMo";
import Memo from "./components/Memo/Memp";
import TodoList from "./components/Todo/TodoList";
function App() {
  // const [count, setCount] = useState(0);
  
  // const increment = () => {
  //     setCount(pre => pre + 1)

  // };

  return (
    <>
      {/* <UseRef />
      <UseMemo />
    
      <Memo onIncrementT={increment}/>
      <b>{count}</b><br/> */}

      <TodoList/>
    </>
  );
}

export default App;
