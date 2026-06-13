function Filme({ titulo = "", genero = "", ano = "" }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>Gênero: {genero}</p>
      <p>Ano: {ano}</p>
    </div>
  );
}

export default Filme;