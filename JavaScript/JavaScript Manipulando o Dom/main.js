const robotron = document.querySelector('Robotron');

robotron.addEventListener('click', (evento)=>{
    console.log(evento);
});

function dizOi (nome){
    console.log(nome);
    console.log("Bem vindo ao Robotron 2000");
}

dizOi('Willian');