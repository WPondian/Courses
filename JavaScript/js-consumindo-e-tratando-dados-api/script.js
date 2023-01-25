async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let responseConvertido = await consultaCEP.json();
        if (responseConvertido.erro) {
            throw Error('CEP não existente!');
        }

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('logradouro');
        let estado = document.getElementById('estado');

        cidade.value = responseConvertido.localidade;
        logradouro.value = responseConvertido.logradouro;
        estado.value = responseConvertido.uf;

        return responseConvertido
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Cep inválido. Tente novamente!</p>`
        console.log(erro);
    }
}


let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => {
    if(cep.value){
        buscaEndereco(cep.value);
    }
})

// consulta varios ceps e depois com Promisse.all ele converte as promisses retornadas das consultas feitas.
// let ceps = ['01001000','01001001'];

// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));