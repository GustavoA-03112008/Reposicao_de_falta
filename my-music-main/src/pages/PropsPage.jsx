import Aluno from "../components/Aluno";
import Produto from "../components/Produto";
import Filme from "../components/Filme";
import Usuario from "../components/Usuario";

function PropsPage() {
  return (
    <div>
      <h1>Props</h1>

      <Aluno nome="Gustavo" curso="Desenvolvimento de Sistema" idade={17} />

      <Produto nome="Notebook" preco={3500} categoria="TI" />

      <Filme titulo="Creed III" genero="Ação" ano={2023} />

      <Usuario
        nome="Gustavo"
        email="gu.augusto003@gmail.com"
      />
    </div>
  );
}

export default PropsPage;