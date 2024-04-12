import React from "react";
import UserContext from "./UserContext";
import Produto from "./Produto";

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
