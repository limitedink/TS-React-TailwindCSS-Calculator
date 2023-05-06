import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [operator, setOperator] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState("0");

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNum1(Number(e.target.value));

  const calculate = () => {
    if (!operator) {
      setResult(Number(currentValue));
      return;
    }

    let newResult = 0;

    if (num1 !== 0) {
      newResult = Number(operate(operator, num1, Number(currentValue)));
      setNum1(newResult);
    } else {
      newResult = Number(currentValue);
      setNum1(newResult);
    }

    setResult(newResult);
    setCurrentValue(newResult.toString());
    setOperator(null);
  };

  const add = (a: number, b: number) => a + b;
  const subtract = (a: number, b: number) => a - b;
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => a / b;
  const modulus = (a: number, b: number) => a % b;
  const exponent = (a: number, b: number) => Math.pow(a, b);

  const operate = (operator: string, a: number, b: number) => {
    switch (operator) {
      case "+":
        return add(a, b).toFixed(3);
      case "-":
        return subtract(a, b).toFixed(3);
      case "*":
        return multiply(a, b).toFixed(3);
      case "/":
        if (b === 0) {
          return "Error: Divide by 0";
        } else {
          return divide(a, b).toFixed(3);
        }
      case "%":
        return modulus(a, b).toFixed(3);
      case "**":
        return exponent(a, b).toFixed(3);
      default:
        return "Error: Invalid operator";
    }
  };

  const handleNumClick = (num: string) => {
    if (currentValue === "0" && num !== ".") {
      setCurrentValue(num.toString());
    } else if (currentValue.includes(".") && num === ".") {
      setCurrentValue(currentValue);
    } else {
      setCurrentValue(currentValue + num.toString());
    }
  };

  const handleEqualsClick = () => {
    if (operator && currentValue !== "") {
      calculate();
    } else {
      setResult(num1);
    }
  };

  const handleOperatorClick = (operator: string) => {
    if (num1 !== 0 && operator) {
      calculate();
    }
    setOperator(() => operator);
    setNum1(parseFloat(currentValue));
    setCurrentValue("");
  };

  const handleClear = () => {
    const newValue = currentValue.slice(0, -1) || "0";
    setCurrentValue(newValue);
  };

  const handleAllClear = () => {
    setCurrentValue("0");
    setNum1(0);
    setResult(0);
    setOperator(null);
  };

  const handleSignChange = () => {
    const newNum = Number(currentValue) * -1;
    setCurrentValue(newNum.toString());
  };

  const handlePercentage = () => {
    const newNum = Number(currentValue) / 100;
    setCurrentValue(newNum.toString());
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
            value={currentValue}
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
              onClick={() => handlePercentage()}
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
              onClick={() => handleOperatorClick("%")}
            >
              MOD
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOperatorClick("**")}
            >
              ^
            </button>
          </div>
        </div>
        <div className="my-2">
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((7).toString())}
            >
              7
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((8).toString())}
            >
              8
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((9).toString())}
            >
              9
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOperatorClick("/")}
            >
              /
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((4).toString())}
            >
              4
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((5).toString())}
            >
              5
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((6).toString())}
            >
              6
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOperatorClick("*")}
            >
              *
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((1).toString())}
            >
              1
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((2).toString())}
            >
              2
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((3).toString())}
            >
              3
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOperatorClick("-")}
            >
              -
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleNumClick((0).toString())}
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
              onClick={() => handleEqualsClick()}
            >
              =
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOperatorClick("+")}
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
