import Footer from "../Footer";
import Form from "../exercicio8/Form/Form";
import Header from "../Header";

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <div>
        <Teste />
        <Header></Header>
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
