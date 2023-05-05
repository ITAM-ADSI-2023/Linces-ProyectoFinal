import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
//import "./css/CSSGeneral.css";
import Login from "./componentes/LogIn";
import PortalAdmin from "./componentes/PortalAdmin";
import PortalEst from "./componentes/PortalEst";
import CrearCaso from "./componentes/CrearCaso";
import BuscarCaso from "./componentes/BuscarCaso";

function App() {
  const [usuarix, setUsuarix] = useState({
    nombre: "",
    tipo: "",
  });

  return (
    <UserContext.Provider
      value={{ userInfo: usuarix, setUserInfo: setUsuarix }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/PortalAdmin/:id" element={<PortalAdmin />} />
          <Route path="/PortalEst/:id" element={<PortalEst />} />
          <Route path="/NuevoCaso" element={<CrearCaso />} />
          <Route path="/BuscarCaso" element={<BuscarCaso />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
