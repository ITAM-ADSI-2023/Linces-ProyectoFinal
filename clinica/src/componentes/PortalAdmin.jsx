import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";

const PortalAdmin = () => {
  const { userInfo } = useContext(UserContext);
  const [redireccion, setRedireccion] = useState(false);
  console.log(userInfo);

  function cerrarSesion() {
    setRedireccion(true);
  }

  if (redireccion) {
    return <Navigate to="/" />;
  }
  //mantener el userInfo en cache para no perderlo cuando se haga refresh

  console.log(userInfo);
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
export default PortalAdmin;
