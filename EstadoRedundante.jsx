/* import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Regístrate</h2>
      <label>
        Nombre: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Apellido: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Tu ticket será emitido a: <b>{fullName}</b>
      </p>
    </>
  );
} */

import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Alma Ata, Kazajistán</h2>
      <Panel
        title="Acerca de"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Con una población de unos 2 millones de habitantes, Alma Ata es la mayor
        ciudad de Kazajistán. De 1929 a 1997 fue su capital.
      </Panel>
      <Panel
        title="Etimología"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        El nombre proviene de <span lang="kk-KZ">алма</span>, la palabra en
        kazajo para "manzana", y suele traducirse como "lleno de manzanas". De
        hecho, se cree que la región que rodea a Alma Ata es el hogar ancestral
        de la manzana, y el <i lang="la">Malus Silvestris</i> se considera un
        candidato probable para el ancestro de la manzana doméstica moderna.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Mostrar</button>}
    </section>
  );
}

/* 
import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Casas de arcoiris en Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
} */



/* 
import {useState} from 'react'

export default function EditProfile() {
  const [firstName, setFirstName] = useState(' Jane')
  const [lastName, setLastName] = useState(' Jacobs')
  const [isEditting, setIsEditting ] = useState(false)

  
  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditting(!isEditting)
    }}>
      <label>
        Nombre:{' '}
        {isEditting ? (
            <input
             value={firstName}
             onChange={e => {
                setFirstName(e.target.value)
             }}
             />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
      </label>
      Apellido:{' '}
        {isEditting ? (
            <input
            value={lastName}
            onChange={e => {
                setLastName(e.target.value)
            }}
            />
        ) : (
            <b>{lastName}</b>
        )}
        <label/>
      <button type="submit">
        {isEditting ? 'Guardar' : 'Editar'} Profile
      </button>
      <p><i>`¡Hola, {firstName + ' ' + lastName}`</i></p>
    </form>
  );
}
 */

import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crujiente de algas', id: 1 },
  { title: 'barra de granola', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>¿Cuál es tu merienda de viaje?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Seleccionar</button>
          </li>
        ))}
      </ul>
      <p>Seleccionaste {selectedItem.title}.</p>
    </>
  );
}