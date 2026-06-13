import { useState } from "react";

function Nome() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />

      <p>{nome}</p>
    </div>
  );
}

export default Nome;