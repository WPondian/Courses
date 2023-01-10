const elementoChute = document.getElementById('chute');
let chute;

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak)


function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
}

function exibeChuteNaTela(){
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}