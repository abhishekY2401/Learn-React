import { useState } from "react";

const UseStateObjects = () => {
  const [person, setPerson] = useState({
    name: "Abhishek",
    age: 19,
    message: "Hey!! Hi, Please teach me DSA",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hi!! sorry for that" });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button onClick={changeMessage}>Change</button>
    </>
  );
};

export default UseStateObjects;
