import React from "react";

const titulo = <h1>esse é o titulo:</h1>

const App = () => {
  const nome = "willian ";
  const ativo = true;
  const carro = {
    marca:'Ford',
    rodas:'4'
  }

  function mostrarNome(sobrenome){
    return 'Willian' + sobrenome;
  }

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  }


  return (
    <>
      {titulo}
      <p style={estiloP}> { ativo ? 'aaaaa' : 'bbbb'} - {10} </p>
      {mostrarNome(' Pondian')}
      <p>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <h1 className={ativo ? "ativo" : "inativo"}>Bem vindo {nome}</h1>
    </>
  );
};

export default App;
