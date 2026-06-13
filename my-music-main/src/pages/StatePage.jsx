import Contador from "../components/Contador";
import Mensagem from "../components/Mensagem";
import ListaCompras from "../components/ListaCompras";
import Curtidas from "../components/Curtidas";

function StatePage() {
  return (
    <>
      <h1>State</h1>

      <Contador />
      <Mensagem />
      <ListaCompras />
      <Curtidas />
    </>
  );
}

export default StatePage;