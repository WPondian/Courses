import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ backgroundColor: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="lemgo lemgo lemgo">Testando</Titulo>
      <Titulo cor="blue" texto="lemgo lemgo lemgo 2" /><Titulo />
    </div>
  );
};

export default App;
