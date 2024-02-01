// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  //let total = 0;
  //   for (const index in dados.compras) {
  //     dados.compras[index].preco = dados.compras[index].preco.replace('R$','');
  //     dados.compras[index].preco = parseInt(dados.compras[index].preco);
  //     total = total + dados.compras[index].preco;
  //   }

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$", "")))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente} </p>
      <p>idade: {dados.idade} </p>
      <p>
        Situação:
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>
          {dados.ativa ? "ativa" : "inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {total} </p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default App;
