import { useState } from "react";

function Mensagem() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar mensagem" : "Mostrar mensagem"}
      </button>

      {mostrar && <p>Esta é a mensagem</p>}
    </div>
  );
}

export default Mensagem;