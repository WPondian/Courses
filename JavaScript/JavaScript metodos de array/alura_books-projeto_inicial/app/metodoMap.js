function aplicarDesconto(livros){
    const desconto = 0.3;
    let livrosComDesconto = livros.map(()=>{
        return {...livros, preco:livros.preco - (livro.preco * desconto)}
    })

    return livrosComDesconto
}