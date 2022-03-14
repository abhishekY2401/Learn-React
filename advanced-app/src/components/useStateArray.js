import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <h2 key={id}>{name}</h2>
            <button onClick={() => removeItem(id)}>remove</button>
          </>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
