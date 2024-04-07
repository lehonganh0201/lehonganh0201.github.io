import { useRef, useState } from "react";

const UseRef =  () =>{
    const[digit,setDigit] = useState(90);
    // const[timerId,setTimerId] = useState();

    const timerId = useRef();

    const h1Ref = useRef();
    const handerStart = () =>{
        timerId.current = setInterval(() =>{
            setDigit(pre => pre - 1)
        },1000);
        h1Ref.current.style.color = "red";
        console.log(h1Ref.current);
    }

    const handerStop = () => {
        h1Ref.current.style.border = "5px solid yellow";
        clearInterval(timerId.current);
    }

    return (
        <div>
            <h2 ref={h1Ref}>{digit}</h2>
            <button onClick={handerStart}>Start</button>
            <button onClick={handerStop}>Stop</button>
        </div>
    )
}

export default UseRef;