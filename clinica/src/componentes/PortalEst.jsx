import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";

const PortalEst = () => {
  const { userInfo } = useContext(UserContext);

  console.log(userInfo);
  return (
    <>
      <head>
        <link href="CSSGeneral.css" rel="stylesheet" />
      </head>
      <body>
        <header>
          <div className="div_header">
            <h1>Bienvenidx, [nombre del usuario]</h1>
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
