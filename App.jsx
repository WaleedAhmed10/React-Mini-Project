import React, { useState } from "react";
import Student from "./Student";
import Teacher from "./Teacher";
import Counter from "./Counter";
import ClickTracker from "./ClickTracker";
import Child from "./Child";
import ResetCounter from "./ResetCounter";
import DecreaseCounter from "./DecreaseCounter";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const decreaseByAmount = (amount) => {
    setCount(count - amount);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Props, State, and Callback Functions Lab</h1>
      <hr />
      <h2>Part A: Props - Student Information</h2>
      <Student name="John Doe" course="Computer Science" />
      <Student name="Jane Smith" course="Mathematics" />
      <hr />
      <h2>Exercise 1: Teacher Component with Props</h2>
      <Teacher name="Engr. Bilal" subject="Physics" />
      <Teacher name="Dr. Awais" subject="Computer Science" />
      <hr />
      <h2>Part B: State - Counter</h2>
      <Counter />
      <hr />
      <h2>Exercise 2: Click Tracker</h2>
      <ClickTracker />
      <hr />
      <h2>Part C: Callback Functions</h2>
      <h3>Parent Count: {count}</h3>
      <Child onIncrement={increaseCount} />
      <hr />
      <h2>Exercise 3: Reset Counter</h2>
      <ResetCounter onReset={resetCount} />
      <hr />
      <h2>Exercise 4: Decrease Counter</h2>
      <DecreaseCounter onDecrease={decreaseCount} />
      <hr />
      <h2>Exercise 5: Parameters from Child</h2>
      <button onClick={() => decreaseByAmount(2)}>
        Decrease by 2
      </button>
      <button onClick={() => decreaseByAmount(5)}>
        Decrease by 5
      </button>
    </div>
  );
}

export default App;