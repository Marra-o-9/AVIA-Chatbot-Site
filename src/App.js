import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/services">Catálogo de Serviços</Link></li>
          <li><Link to="/schedule">Agendamento</Link></li>
          <li><Link to="/register">Cadastro</Link></li>
          <li><Link to="/support">Feedback e Suporte</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register" element={<Register />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
