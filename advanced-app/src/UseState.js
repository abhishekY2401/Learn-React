import { useState } from "react";

const UseState = () => {
  let [title, setTitle] = useState("Basic React");

  const AnotherClickHandler = () => {
    title = "Advanced React";
    setTitle(title);
  };

  return (
    <div>
      <h1>With UseState</h1>
      <h2>{title}</h2>
      <button type="button" onClick={AnotherClickHandler}>
        Change
      </button>
    </div>
  );
};

export default UseState;
