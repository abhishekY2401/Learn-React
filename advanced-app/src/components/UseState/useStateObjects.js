import { useState } from "react";

const UseStateObjects = () => {
  const [person, setPerson] = useState({
    name: "Abhishek",
    age: 19,
    message: "Hey!! Hi, Please teach me DSA",
  });

  const [name, setName] = useState(person.name);
  const [age, setAge] = useState(person.age);
  const [message, setMessage] = useState(person.message);

  const changeMessage = () => {
    setMessage("Hi! sorry for that");
    setName("Yash");
    setAge(20);
  };

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button onClick={changeMessage}>Change</button>
    </>
  );
};

export default UseStateObjects;
