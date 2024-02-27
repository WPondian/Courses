import React from "react";

const Button = ({ funcao, nome }) => {
  React.useEffect(() => {
    funcao(nome);
  }, [funcao, nome]);

  // return <button onClick={dados.funcao} style={{ marginRight: "15px" }}>{dados.nome}</button>;
};

export default Button;
