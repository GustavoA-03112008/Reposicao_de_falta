function Aluno({ nome = "", curso = "", idade = 0 }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
      <p>Idade: {idade}</p>
    </div>
  );
}

export default Aluno;