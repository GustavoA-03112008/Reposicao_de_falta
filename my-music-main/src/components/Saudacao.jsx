function Saudacao() {
  function alerta() {
    alert("Olá! Seja bem-vindo(a)");
  }

  return <button onClick={alerta}>Cumprimentar</button>;
}

export default Saudacao;