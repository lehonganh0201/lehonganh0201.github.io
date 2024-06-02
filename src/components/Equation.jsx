import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { solveEquation } from "../store/counterSlice";
import { calEquation } from "../utils/ApiFuntions";
const Equation = () => {
    const [coefficients, setCoefficients] = useState({ a: 1, b: 0, c: 0, d: 0, e: 0 });
    const solutions = useSelector((state) => state.counter.solutions);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setCoefficients({
        ...coefficients,
        [e.target.name]: parseFloat(e.target.value)
      });
    };

    // const calculateEquation = async() =>{
    //     const result = await calEquation(coefficients.a, coefficients.b, coefficients.c, coefficients.d, coefficients.e);
    //     console.log(result);
    // }
  
    const handleSolve = () => {
      dispatch(solveEquation(coefficients));
    };
  
    return (
      <div>
        <h1>Solve Quartic Equation</h1>
        <div>
          <input
            type="number"
            name="a"
            value={coefficients.a}
            onChange={handleChange}
            placeholder="a"
          />
          <input
            type="number"
            name="b"
            value={coefficients.b}
            onChange={handleChange}
            placeholder="b"
          />
          <input
            type="number"
            name="c"
            value={coefficients.c}
            onChange={handleChange}
            placeholder="c"
          />
          <input
            type="number"
            name="d"
            value={coefficients.d}
            onChange={handleChange}
            placeholder="d"
          />
          <input
            type="number"
            name="e"
            value={coefficients.e}
            onChange={handleChange}
            placeholder="e"
          />
        </div>
        <button onClick={handleSolve}>Solve</button>
        <h2>Solutions:</h2>
        <div>
          {solutions.length ? (
            solutions.map((solution, index) => (
              <div key={index}>{solution.toString()}</div>
            ))
          ) : (
            <div>No solutions found</div>
          )}
        </div>
      </div>
    );
  };

export default Equation;
