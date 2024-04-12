import React, { Children } from "react";

export const GlobalContext = React.createContext();

export const GlobalStored = ({Children})=>{
    return <GlobalContext.Provider>{Children}</GlobalContext.Provider>
}