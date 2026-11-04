import React, { useState } from 'react'

const Calculator = () => {
  const [num, setNum] = useState("0")
  const [firstNum, setFirstNum] = useState(0)
  const [operator, setOperator] = useState("")
  const [newNum, setNewNum] = useState(false)

  const handleNumber = (value) => {
    if (num === "0" || newNum) {
      setNum(value)
      setNewNum(false)
    } else {
      setNum(num + value)
    }
  }

  const handleOperator = (op) => {
    setFirstNum(Number(num))
    setOperator(op)
    setNewNum(true)
  }

  const handleEqual = () => {
    let result = 0

    if (operator === "+") result = firstNum + Number(num)
    if (operator === "-") result = firstNum - Number(num)
    if (operator === "*") result = firstNum * Number(num)
    if (operator === "/") result = firstNum / Number(num)

    setNum(String(result))
    setNewNum(true)
  }

  const handleClear = () => {
    setNum("0")
    setFirstNum(0)
    setOperator("")
    setNewNum(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-5 mb-5 underline">Calculator</h1>
      <div className="bg-gray-800 p-5 rounded-lg w-80 max-w-[calc(100vw-2rem)]">
        <div className="bg-gray-300 p-5 text-right text-3xl font-bold mb-4">
          {num}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="bg-red-400 p-4">C</button>
          <button onClick={() => handleOperator("/")} className="bg-blue-400 p-4">÷</button>
          <button onClick={() => handleOperator("*")} className="bg-blue-400 p-4">×</button>
          <button onClick={() => handleOperator("-")} className="bg-blue-400 p-4">−</button>
          <button onClick={() => handleNumber("7")} className="bg-white p-4">7</button>
          <button onClick={() => handleNumber("8")} className="bg-white p-4">8</button>
          <button onClick={() => handleNumber("9")} className="bg-white p-4">9</button>
          <button onClick={() => handleOperator("+")} className="bg-blue-400 p-4">+</button>
          <button onClick={() => handleNumber("4")} className="bg-white p-4">4</button>
          <button onClick={() => handleNumber("5")} className="bg-white p-4">5</button>
          <button onClick={() => handleNumber("6")} className="bg-white p-4">6</button>
          <button onClick={() => handleNumber("1")} className="bg-white p-4">1</button>
          <button onClick={() => handleNumber("2")} className="bg-white p-4">2</button>
          <button onClick={() => handleNumber("3")} className="bg-white p-4">3</button>
          <button onClick={() => handleEqual()} className="bg-blue-400 p-4">=</button>
          <button onClick={() => handleNumber("0")} className="bg-white p-4 col-span-2">0</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator;