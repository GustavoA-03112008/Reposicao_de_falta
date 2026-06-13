import { useState } from "react";

function ListaCompras() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (item.trim() === "") return;

    setLista([...lista, item]);
    setItem("");
  }

  return (
    <div>
      <h2>Lista de Compras</h2>

      <input
        type="text"
        placeholder="Digite um item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={adicionarItem}>
        Adicionar Item
      </button>

      <ul>
        {lista.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;