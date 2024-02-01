import React from "react";

const Produto = ({nome, propriedades}) => {
  return (
    <div
      key={nome}
      style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}
    >
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
