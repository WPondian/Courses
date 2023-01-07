const botoes = document.querySelectorAll('.btn');
botoes.forEach((botao)=>{
botao.addEventListener('click', filtrarLivrosDeFront(botao.value));
})

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}