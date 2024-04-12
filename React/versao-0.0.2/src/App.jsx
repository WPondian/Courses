import React from "react";
import Produto from "./Produto";
import {GlobalStorage} from "./exercicio18/UserContext";

const App = () => {
  return (
    <>
      <UserContext.Provider value={{nome:'Willian'}}>
        <Produto></Produto>
      </UserContext.Provider>
    </>
  );
};

export default App;
