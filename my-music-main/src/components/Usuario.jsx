import fotoPerfil from "../assets/FotoPerfil.png";

function Usuario({ nome = "", email = "" }) {
  return (
    <div>
      <h3>Usuário</h3>

      <img
        src={fotoPerfil}
        alt="Foto do usuário"
        width="120"
      />

      <p>{nome}</p>
      <p>{email}</p>
    </div>
  );
}

export default Usuario;