/* function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
 */

// Renderizado de Listas

import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "químico");
  const everyoneElse = people.filter(
    (person) => person.profession !== "químico"
  );
  return (
    <article>
      <h1>Científicos</h1>
      <h2>Químicos</h2>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Todos los demás</h2>
      <ul>
        {everyoneElse.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
