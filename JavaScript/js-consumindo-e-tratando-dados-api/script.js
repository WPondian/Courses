async function buscaEndereco(cep) {
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let responseConvertido = await consultaCEP.json();
        if(responseConvertido.erro){
            throw Error('CEP não existente!');
        }
        console.log(responseConvertido);
        return responseConvertido
    } catch (erro) {
        console.log(erro);
    }
}


let cep = document.getElementById('cep');

// consulta varios ceps e depois com Promisse.all ele converte as promisses retornadas das consultas feitas.
// let ceps = ['01001000','01001001'];

// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));