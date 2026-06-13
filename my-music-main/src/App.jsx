import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PropsPage from "./pages/PropsPage";
import StatePage from "./pages/StatePage";
import EventosPage from "./pages/EventosPage";
import ApiPage from "./pages/ApiPage";
import Sobre from "./pages/Sobre";
import Aluno from "./components/Aluno";
import Produto from "./components/Produto";
import Filme from "./components/Filme";
import Usuario from "./components/Usuario";

import Contador from "./components/Contador";
import Mensagem from "./components/Mensagem";
import ListaCompras from "./components/ListaCompras";
import Curtidas from "./components/Curtidas";

import Saudacao from "./components/Saudacao";
import CorPagina from "./components/CorPagina";
import Nome from "./components/Nome";
import Cidade from "./components/Cidade";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      {/*
      =========================
      EXERCÍCIOS ANTIGOS
      =========================

      <Aluno />
      <Produto />
      <Filme />
      <Usuario />

      <Contador />
      <Mensagem />
      <ListaCompras />
      <Curtidas />

      <Saudacao />
      <CorPagina />
      <Nome />
      <Cidade />

      <Musicas />
      */}
    </BrowserRouter>
  );
}

export default App;