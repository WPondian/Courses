import React from "react";

const Lista = ({ dados }) => {
    if(dados){
        return (
        <li key={dados.id}>
          <h3>{dados.id}</h3>
          <p>{dados.preco}</p>
          {dados.fotos.map(({ src, titulo }) => 
            <img key={titulo} src={src} alt={titulo} />
          )}
        </li>
      );
    }

    return (
        <div></div>
    );
  
};

export default Lista;
