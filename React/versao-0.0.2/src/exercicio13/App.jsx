import React from "react";
import Button from "./Button";
import Lista from "./Lista";

const App = () => {
  const [dadosProduto, setDadosProduto] = React.useState("");
  const [carregando, setCarregando] = React.useState("");

  const [textoDaPromise, setTextoDaPromise] = React.useState("");

  React.useEffect(() => {
    retornarTexto()
      .then((resultado) => {
        setTextoDaPromise(resultado);
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });
  }, []);

  async function retornarTexto() {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("notebook");
      }, 3000);
    });
  }

  async function consultarDados(nome) {
    setCarregando(true);
    setDadosProduto("");

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nome}`
    );
    try {
      let retorno = await response.json();

      setDadosProduto(retorno);
      console.log("dadosProduto", dadosProduto);
    } catch (error) {
      console.log(error);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <div>
        <Button funcao={consultarDados} nome={textoDaPromise} />
        {/* <Button funcao={() => consultarDados("tablet")} nome="tablet" /> */}
        {/* <Button funcao={() => consultarDados("smartphone")} nome="smartphone" /> */}
      </div>

      <section>
        {carregando && <h5>Carregando...</h5>}
        <ul>
          <Lista dados={dadosProduto} />
        </ul>
      </section>
    </>
  );
};

export default App;
