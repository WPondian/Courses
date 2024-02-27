import React from "react";
import Header from "../exercicio10/Header";
import Home from "../exercicio10/Home";
import Produtos from "../exercicio10/Produtos";

const App = () => {
  let Pagina;

  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <>
      <section>
        <Header />
        <Pagina />
      </section>
    </>
  );
};

export default App;
