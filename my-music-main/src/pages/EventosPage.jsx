import Saudacao from "../components/Saudacao";
import CorPagina from "../components/CorPagina";
import Nome from "../components/Nome";
import Cidade from "../components/Cidade";

function EventosPage() {
  return (
    <div>
      <h1>Eventos</h1>

      <Saudacao />
      <CorPagina />
      <Nome />
      <Cidade />
    </div>
  );
}

export default EventosPage;