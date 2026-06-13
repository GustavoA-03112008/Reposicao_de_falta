function CorPagina() {
  function azul() {
    document.body.style.background = "blue";
  }

  function verde() {
    document.body.style.background = "green";
  }

  return (
    <div>
      <button onClick={azul}>Azul</button>
      <button onClick={verde}>Verde</button>
    </div>
  );
}

export default CorPagina;