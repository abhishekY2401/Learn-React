import { useState } from "react";
import "../App.css";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
