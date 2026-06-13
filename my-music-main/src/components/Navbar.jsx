import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/props">Props</Link> |{" "}
      <Link to="/state">State</Link> |{" "}
      <Link to="/eventos">Eventos</Link> |{" "}
      <Link to="/api">API</Link> |{" "}
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Navbar;