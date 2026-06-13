import { useEffect, useState } from "react";
import api from "../services/services";

function Musicas() {
  const [musicas, setMusicas] = useState([]);
  const [nome, setNome] = useState("");
  const [artista, setArtista] = useState("");

  async function listar() {
    const res = await api.get("/Musica");
    setMusicas(res.data);
  }

  useEffect(() => {
    listar();
  }, []);

  async function cadastrar() {
    await api.post("/Musica", {
      nome,
      artista
    });

    alert("Cadastrado!");

    setNome("");
    setArtista("");

    listar();
  }

  async function excluir(id) {
    await api.delete(`/Musica/${id}`);

    alert("Removido!");

    listar();
  }

  return (
    <div>
      <h2>Músicas</h2>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="Artista"
        value={artista}
        onChange={(e) => setArtista(e.target.value)}
      />

      <button onClick={cadastrar}>Cadastrar</button>

      <ul>
        {musicas.map((m) => (
          <li key={m.idMusica}>
            {m.nome} - {m.artista}
            <button onClick={() => excluir(m.idMusica)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Musicas;