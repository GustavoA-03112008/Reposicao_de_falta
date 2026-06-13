import { useState } from "react";

function Cidade() {
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <div>
      <input
        placeholder="Cidade"
        onChange={(e) => setCidade(e.target.value)}
      />

      <input
        placeholder="Estado"
        onChange={(e) => setEstado(e.target.value)}
      />

      <p>{cidade}</p>
      <p>{estado}</p>
    </div>
  );
}

export default Cidade;