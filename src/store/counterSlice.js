import { createSlice } from "@reduxjs/toolkit";

const solveQuadratic = (a, b, c) => {
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
      return [];
    } else if (delta === 0) {
      return [-b / (2 * a)];
    } else {
      const sqrtDelta = Math.sqrt(delta);
      return [(-b + sqrtDelta) / (2 * a), (-b - sqrtDelta) / (2 * a)];
    }
  };
  
  const solveCubic = (a, b, c, d) => {
    const f = ((3 * c) / a - (b ** 2) / (a ** 2)) / 3;
    const g = (((2 * b ** 3) / (a ** 3)) - ((9 * b * c) / (a ** 2)) + (27 * d) / a) / 27;
    const h = (g ** 2) / 4 + (f ** 3) / 27;
  
    if (h > 0) {
      return [];
    } else if (f === 0 && g === 0 && h === 0) {
      return [-((d / a) ** (1 / 3))];
    } else {
      const i = Math.sqrt((g ** 2) / 4 - h);
      const j = i ** (1 / 3);
      const k = Math.acos(-(g / (2 * i)));
      const L = j * -1;
      const M = Math.cos(k / 3);
      const N = Math.sqrt(3) * Math.sin(k / 3);
      const P = (b / (3 * a)) * -1;
  
      return [
        2 * j * Math.cos(k / 3) - (b / (3 * a)),
        L * (M + N) + P,
        L * (M - N) + P
      ];
    }
  };
  
  const solveQuartic = (a, b, c, d, e) => {
    const [p, q, r] = solveCubic(1, -c / a, (b * d - 4 * a * e) / (a ** 2), ((4 * c * e - (b ** 2) * e - d ** 2) / (a ** 3)));
    const A = (1 / 2) * Math.sqrt((2 / 3) * p);
    const B = (1 / 2) * Math.sqrt((2 / 3) * p + (2 * q) / Math.sqrt((p ** 3) / 27));
    const C = (1 / 2) * Math.sqrt((2 / 3) * p - (2 * q) / Math.sqrt((p ** 3) / 27));
    const D = (1 / 2) * Math.sqrt((-2 / 3) * p + (2 * r) / Math.sqrt((p ** 3) / 27));
    
    return [
      A + B - (b / (4 * a)),
      A - B - (b / (4 * a)),
      -A + C - (b / (4 * a)),
      -A - C - (b / (4 * a)),
      D - (b / (4 * a))
    ];
  };
  

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    solutions: [],
  },
  reducers: {
    solveEquations: (state, action) => {
      const { coefficients, constants } = action.payload;
      const n = coefficients.length;
      let matrix = coefficients.map((row, i) => [...row, constants[i]]);

      for (let i = 0; i < n; i++) {
        let maxEl = Math.abs(matrix[i][i]);
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
          if (Math.abs(matrix[k][i]) > maxEl) {
            maxEl = Math.abs(matrix[k][i]);
            maxRow = k;
          }
        }

        for (let k = i; k < n + 1; k++) {
          let tmp = matrix[maxRow][k];
          matrix[maxRow][k] = matrix[i][k];
          matrix[i][k] = tmp;
        }

        for (let k = i + 1; k < n; k++) {
          let c = -matrix[k][i] / matrix[i][i];
          for (let j = i; j < n + 1; j++) {
            if (i === j) {
              matrix[k][j] = 0;
            } else {
              matrix[k][j] += c * matrix[i][j];
            }
          }
        }
      }

      let solutions = new Array(n).fill(0);
      for (let i = n - 1; i >= 0; i--) {
        solutions[i] = matrix[i][n] / matrix[i][i];
        for (let k = i - 1; k >= 0; k--) {
          matrix[k][n] -= matrix[k][i] * solutions[i];
        }
      }

      state.solutions = solutions;
    },
    solveEquation: (state, action) => {
        const { a, b, c, d, e } = action.payload;
        try {
          if (a === 0) {
            throw new Error("Coefficient 'a' cannot be zero for a quartic equation");
          }
          const solutions = solveQuartic(a, b, c, d, e);
          state.solutions = solutions;
        } catch (error) {
          state.solutions = [error.message];
        }
      },
  },
});

export const { solveEquations, solveEquation } = counterSlice.actions;

export default counterSlice.reducer;
