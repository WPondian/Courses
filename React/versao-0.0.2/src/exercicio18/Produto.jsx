import React from "react";
import UserContext from "./UserContext";

const Produto = () => {
  const dadosDoContext = React.useContext(UserContext);

  return <div>{dadosDoContext}</div>;
};

export default Produto;
