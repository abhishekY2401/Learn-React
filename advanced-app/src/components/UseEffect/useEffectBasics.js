import React, { useState, useEffect } from "react";
import "../../App.css";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");

    // applying conditions in useEffect.
    if (value > 1) {
      document.title = `You clicked ${value} times`;
    }
  });

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h3>UseEffect Basics</h3>
      <h2>{value}</h2>
      <button className="btn" onClick={increment}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
