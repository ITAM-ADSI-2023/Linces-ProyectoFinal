import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";

const PortalAdmin = () => {
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
          <button className="inline" id="btnCrearCasoPortalAdmin">
            Crear caso
          </button>
          <button className="inline" id="btnBuscarCasoPortalAdmin">
            Buscar caso
          </button>
          <div className="divCerrarSesion">
            <button
              className="cerrar_sesion_button"
              id="btnCerrarSesionPortalAdmin"
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
export default PortalAdmin;
