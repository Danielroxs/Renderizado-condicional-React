import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        Nombre Pila:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Apellido:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Correo electrónico:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} {`(${person.email})`}
      </p>
    </>
  );
}
