import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
const [modal, setModal] = React.useState(false);
const [itens, setItens] = React.useState('Teste');

function handleClick(){
  setItens('Outros');
}

  return (
    <>
      <div> 
        <button onClick={()=>handleClick}></button>
        <div>{modal ? 'Modal aberto' : 'Modal Fechado'}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal}/>
      </div>
    </>
  );
};

export default App;
