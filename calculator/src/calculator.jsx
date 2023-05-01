import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [currentValue, setCurrentValue] = useState("0");

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

  const handleNumClick = (num) => {
    if (currentValue === "0" && num !== ".") {
      setCurrentValue(num.toString());
      setNum2(parseFloat(num));
    } else if (currentValue.includes(".") && num === ".") {
      // do nothing if decimal already exists
      return;
    } else {
      setCurrentValue((prevValue) => prevValue.toString() + num.toString());
      setNum2(parseFloat(currentValue.toString() + num.toString()));
    }
  };
  const handleClear = () => {
    const newValue = currentValue.slice(0, -1) || "0";
    setCurrentValue(newValue);
    setNum2(parseInt(newValue) || 0);
  };

  const handleAllClear = () => {
    setCurrentValue("0");
    setNum1(0);
    setNum2(0);
    setResult(0);
  };

  const handlePercent = () => {
    const newValue = (num2 / 100) * num1;
    setNum2(newValue);
    setCurrentValue(newValue.toString());
  };

  const handleSignChange = () => {
    const newNum2 = num2 * -1;
    setNum2(newNum2);
    setCurrentValue(newNum2.toString());
  };

  return (
    <div className="w-64 m-auto">
      <h1 className="text-center my-6 text-3xl font-bold">C4LC Y@ L8R</h1>
      <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg p-4 my-4">
        <div className="my-2">
          <input
            type="number"
            placeholder="0"
            className="w-full p-2 border rounded-lg"
            onChange={handleNum1Change}
            value={num1}
          />
        </div>
        <div className="my-2">
          <input
            type="number"
            placeholder="0"
            className="w-full p-2 border rounded-lg"
            onChange={handleNum2Change}
            value={num2}
          />
        </div>
        <div className="my-2">
          <h2 className="text-2xl font-bold">{result}</h2>
        </div>
        <div className="my-2">
          <div className="flex justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAllClear()}
            >
              AC
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleClear()}
            >
              C
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              onClick={() => handlePercent()}
            >
              %
            </button>
          </div>
        </div>
        <div className="my-2">
          <div className="flex justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              onClick={handleSignChange}
            >
              +/-
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick("MOD")}
            >
              MOD
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => calculate("**")}
            >
              ^
            </button>
          </div>
        </div>
        <div className="my-2">
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(7)}
            >
              7
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(8)}
            >
              8
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(9)}
            >
              9
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => calculate("/")}
            >
              /
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(4)}
            >
              4
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(5)}
            >
              5
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(6)}
            >
              6
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => calculate("*")}
            >
              *
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(1)}
            >
              1
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(2)}
            >
              2
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(3)}
            >
              3
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => calculate("-")}
            >
              -
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(0)}
            >
              0
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick(".")}
            >
              .
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick("=")}
            >
              =
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => calculate("+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
