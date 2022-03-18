import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("hello world");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const people = { id: new Date().getTime().toString(), name, email };
      setPerson((person) => {
        return [...person, people];
      });
      setName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Person</button>
          </div>
        </form>

        <div>
          {person.map((per, index) => {
            const { id, name, email } = per;
            return (
              <>
                <h2 key={id}>{name}</h2>
                <p>{email}</p>
              </>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ControlledInputs;
