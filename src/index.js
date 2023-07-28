import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function reset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="main">
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <div>
        <button onClick={() => setStep((curr) => curr + 1)}>+</button>
        <h2>
          {" "}
          <input
            type="text"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </h2>
        <button onClick={() => setStep((curr) => curr - 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount((curr) => curr + step)}>+</button>
        <h2>Count:{count}</h2>
        <button onClick={() => setCount((curr) => curr - step)}>-</button>
      </div>
      <span>
        {count === 0
          ? `${"Today is"}`
          : `${
              count > 0
                ? count + " days from today is "
                : Math.abs(count) + " days ago was "
            }`}
        {date.toDateString()}
      </span>
      {(count !== 0 || step !== 0) && <button onClick={reset}>Reset</button>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
