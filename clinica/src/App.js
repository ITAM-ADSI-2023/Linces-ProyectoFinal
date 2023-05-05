import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import CasoContext from "./context/CasoContext";
import Login from "./componentes/LogIn";
import PortalAdmin from "./componentes/PortalAdmin";
import PortalEst from "./componentes/PortalEst";
import CrearCaso from "./componentes/CrearCaso";
import BuscarCaso from "./componentes/BuscarCaso";
import DetallesCaso from "./componentes/DetallesCaso";
import AgregarTarea from "./componentes/AgregarTarea";
import InfoCaso from "./componentes/InfoCaso";

function App() {
  //Para mantener la información de quien ingresó al portal
  const [usuarix, setUsuarix] = useState({
    nombre: "",
    tipo: "",
  });

  //Mockup Base de Datos casos para poder ver el flujo del manejo de datos
  const [casosInfo, setCasosInfo] = useState([
    {
      nombre: "",
      iniciales: "",
      descripcionDelCaso: "",
      tipoDeCaso: "",
      estado: "",
      fecha: "",
      tareas: [
        {
          nombre: "Tarea1",
        },
        {
          nombre: "Tarea2",
        },
      ],
    },
  ]);

  return (
    <UserContext.Provider
      value={{ userInfo: usuarix, setUserInfo: setUsuarix }}
    >
      <CasoContext.Provider
        value={{ casos: casosInfo, setCasos: setCasosInfo }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/PortalAdmin/:id" element={<PortalAdmin />} />
            <Route path="/PortalEst/:id" element={<PortalEst />} />
            <Route path="/NuevoCaso" element={<CrearCaso />} />
            <Route path="/BuscarCaso" element={<BuscarCaso />} />
            <Route path="/AgregarTareas/:idCaso" element={<AgregarTarea />} />
            <Route path="/DetallesCaso/:id" element={<DetallesCaso />} />
            <Route path="/InfoCaso" element={<InfoCaso />} />
          </Routes>
        </Router>
      </CasoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
