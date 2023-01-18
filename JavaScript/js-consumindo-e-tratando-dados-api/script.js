let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then((retorno)=> {
    
    if(retorno.erro){
        throw Error('Esse cep não existe!')
    }else{
        console.log(retorno)
    }

})
.catch(erro => console.error(erro))
.finally(mensagem => console.log("procesamento concluido"));

console.log(consultaCEP);