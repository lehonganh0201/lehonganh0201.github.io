import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {solveEquations} from "../store/counterSlice"

const Equations = () => {
    const [coefficients, setCoefficients] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
      const [constants, setConstants] = useState([0, 0, 0, 0]);
      const solutions = useSelector((state) => state.counter.solutions);
      const dispatch = useDispatch();
    
      const handleCoefficientChange = (i, j, value) => {
        const newCoefficients = coefficients.map((row, rowIndex) =>
          rowIndex === i ? row.map((cell, colIndex) => (colIndex === j ? value : cell)) : row
        );
        setCoefficients(newCoefficients);
      };
    
      const handleConstantChange = (i, value) => {
        const newConstants = constants.map((c, index) => (index === i ? value : c));
        setConstants(newConstants);
      };
    
      const handleSolve = () => {
        const parsedCoefficients = coefficients.map(row => row.map(Number));
        const parsedConstants = constants.map(Number);
        dispatch(solveEquations({ coefficients: parsedCoefficients, constants: parsedConstants }));
      };
  return (
    <div>
      <h1>Solve System of Equations</h1>
      {coefficients.map((row, i) => (
        <div key={i}>
          {row.map((value, j) => (
            <input
              key={j}
              type="number"
              value={value}
              onChange={(e) => handleCoefficientChange(i, j, e.target.value)}
            />
          ))}
          <input
            type="number"
            value={constants[i]}
            onChange={(e) => handleConstantChange(i, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSolve}>Solve</button>
      <h2>Solutions:</h2>
      <div>
        {solutions.map((solution, index) => (
          <div key={index}>x{index + 1} = {solution}</div>
        ))}
      </div>
    </div>
  )
}

export default Equations
