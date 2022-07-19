const empresas = [
  {
    nome: "Samsung",
    valorDeMercado: 50,
    CEO: "Kim Hyun Suk",
    anoDeCriacao: 1938,
  },
  {
    nome: "Microsoft",
    valorDeMercado: 415,
    CEO: "Satya Nadella",
    anoDeCriacao: 1975,
  },
  {
    nome: "Intel",
    valorDeMercado: 117,
    CEO: "Brian Krzanich",
    anoDeCriacao: 1968,
  },
  {
    nome: "Facebook",
    valorDeMercado: 383,
    CEO: "Mark Zuckerberg",
    anoDeCriacao: 2004,
  },
  { nome: "Spotify", valorDeMercado: 30, CEO: "Daniel Ek", anoDeCriacao: 2006 },
  { nome: "Apple", valorDeMercado: 845, CEO: "Tim Cook", anoDeCriacao: 1976 },
];

//Empresas criadas depois dos anos 2000.
// O método filter vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste implementado, no nosso caso, quando ano de criação for maior que 2000.
const anoDeCriacao = empresas.filter(empresas => (empresas.anoDeCriacao > 2000));
console.log(anoDeCriacao);

//O nome de cada empresa e de seu CEO.
//Com o método map é possível percorrer todos os item do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.
const exibeInformacoes = empresas.map(empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log(exibeInformacoes);

//O valor de todas as empresas somadas.
//O método reduce passa por cada item do array fazendo uma expressão escolhida, e no final vai devolver um único valor. Exatamente o que precisamos para fazer a soma do valor de mercado das empresas.
const total = empresas.reduce((resultado, quantidade) => {
  return (resultado + quantidade.valorDeMercado);
}, 0);