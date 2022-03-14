import React from "react";

const ErrorUseState = () => {
  let title = "Basics of React";

  const clickHandler = () => {
    title = "Advanced React";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h1>Without UseState</h1>
      <h2>{title}</h2>
      <button type="button" onClick={clickHandler}>
        Change
      </button>
    </React.Fragment>
  );
};

export default ErrorUseState;
