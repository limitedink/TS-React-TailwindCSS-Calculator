import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1Change = (e) => setNum1(Number(e.target.value));
  const handleNum2Change = (e) => setNum2(Number(e.target.value));

  const calculate = (operator) => {
    switch (operator) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      case "**": // Exponent functionality
        setResult(num1 ** num2);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <div className="w-64 m-auto">
      <h1 className="text-center my-6 text-3xl font-bold">Calculator</h1>
      <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg p-4 my-4">
        <div className="my-2">
          <input
            type="number"
            placeholder="0"
            className="w-full p-2 border rounded-lg"
            onChange={handleNum1Change}
          />
        </div>
        <div className="my-2">
          <input
            type="number"
            placeholder="0"
            className="w-full p-2 border rounded-lg"
            onChange={handleNum2Change}
          />
        </div>
        <div className="my-2 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => calculate("+")}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => calculate("-")}
          >
            -
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => calculate("*")}
          >
            *
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => calculate("/")}
          >
            /
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => calculate("**")}
          >
            ^
          </button>
        </div>
        <div className="my-2">
          <h2 className="text-2xl font-bold">{result}</h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
