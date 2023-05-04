import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";
import { redireccionPortal } from "../funciones/redireccion";

const PortalEst = () => {
  const { userInfo } = useContext(UserContext);
  const [redireccion, setRedireccion] = useState(false);

  function cerrarSesion() {
    const confirmed = window.confirm(
      "¿Estás seguro que quieres cerrar sesión?"
    );
    if (confirmed) {
      setRedireccion(true);
    }
  }

  if (redireccion) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <head>
        <link href="CSSGeneral.css" rel="stylesheet" />
      </head>
      <body>
        <header>
          <div className="div_header">
            <h1>Bienvenidx, {userInfo.nombre}</h1>
          </div>
        </header>

        <main>
          <div>
            <button id="btnBuscarCasoPortalEstudiante">Buscar caso</button>
          </div>
          <h2>Lista de Tareas</h2>
          <div className="divLista">
            <ul id="listaTareasPortalEstudiante">
              <li>Tarea 1</li>
              <li>Tarea 2</li>
              <li>Tarea 3</li>
            </ul>
          </div>

          <div className="divCerrarSesion">
            <button
              className="cerrar_sesion_button"
              id="btnCerrarSesionPortalEstudiante"
              onClick={cerrarSesion}
            >
              Cerrar sesión
            </button>
          </div>

          <p className="mt-5 mb-3 text-body-secondary">
            &copy; Derechos reservados Linces 2023
          </p>
        </main>
      </body>
    </>
  );
};
export default PortalEst;
