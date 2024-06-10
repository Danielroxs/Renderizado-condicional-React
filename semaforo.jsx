import { isValidElement, useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Parar es lo siguiente" : "Caminar es lo siguiente");
  }

  return (
    <>
      <button onClick={handleClick}>
        Cambia a {walk ? "Parar" : "Caminar"}
      </button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Caminar" : "Parar"}
      </h1>
    </>
  );
}


import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}

