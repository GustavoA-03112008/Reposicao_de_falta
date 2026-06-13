function Produto({ nome = "", preco = 0, categoria = "" }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Preço: R$ {preco}</p>
      <p>Categoria: {categoria}</p>
    </div>
  );
}

export default Produto;