import React from "react";

const App = () => {
  const [produto, setProduto] = React.useState({});
  const [preferencia, setPreferencia] = React.useState('');

  React.useEffect(()=>{
    setPreferencia(localStorage.getItem('Produto'));
  },[])

  

  async function consultarDados(nome) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nome}`
    );
    try {
      let retorno = await response.json();
      setProduto({ nome: retorno.nome, valor: retorno.preco });
      setPreferencia(retorno.nome);
     

      localStorage.setItem('Produto', retorno.nome);
      console.log(retorno);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Preferência: {preferencia}</h1>
      <button
        style={{ marginRight: "5px" }}
        onClick={() => consultarDados("notebook")}
      >
        Notebook
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => consultarDados("smartphone")}
      >
        Smatphone
      </button>
      <h3>{produto.nome}</h3>
      <strong>{produto.valor ? "R$ " + produto.valor : ""}</strong>
    </>
  );
};

export default App;
