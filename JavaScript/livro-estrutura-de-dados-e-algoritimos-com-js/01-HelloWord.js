

function Pessoa(nome, idade, peso){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;

    this.funSoma = function(v1, v2){
        return console.log(v1 + v2);
    }
}

class Book{
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn(){
        console.log(this.isbn);
    }
}

var pessoa = new Pessoa('willian', '24', '100');

console.log(pessoa);

pessoa.nome = 'Pondian';

console.log(pessoa);

Pessoa.prototype.imprimeNome = function(){
    console.log('metodo da Classe Pessoa');
}

pessoa.imprimeNome();
pessoa.funSoma(2,3);

let params = [ 3, 4, 5 ];

function imprimir(x, y, z){
    console.log('x', x);  
    console.log('y', y);  
    console.log('z', z);  
    console.log('arguments', arguments);  
}

imprimir(...params);