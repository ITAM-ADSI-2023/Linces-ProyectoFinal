import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";

const CrearCaso = () => {
  const { userInfo } = useContext(UserContext);
  const [usuarix, setUsuarix] = useState("");
  const [redireccion, setRedireccion] = useState(false);
  console.log(userInfo);

  function aPortal() {
    setRedireccion(true);
    setUsuarix(userInfo.name);
  }

  if (redireccion) {
    return <Navigate to={`/PortalAdmin/${usuarix}`} />;
  }

  return (
    <>
      <body>
        <h2>Crear Caso</h2>

        <form className="formCrearCaso">
          <div>
            <label htmlFor="nombre">Nombre:</label>
          </div>
          <div>
            <input
              type="text"
              className="selectsCrear"
              id="nombreCrearCaso"
              name="nombre"
            />
          </div>

          <div>
            <label htmlFor="iniciales">Iniciales:</label>
          </div>
          <div>
            <input
              type="text"
              className="selectsCrear"
              id="inicialesCrearCaso"
              name="iniciales"
            />
          </div>

          <div>
            <label htmlFor="descripcion">Descripción del Caso:</label>
          </div>
          <div>
            <input
              type="text"
              className="selectsCrear"
              id="descripcionCrearCaso"
              name="descripcion"
            />
          </div>

          <div>
            <label htmlFor="tipo">Tipo de Caso:</label>
          </div>
          <div>
            <select className="selectsCrear" id="tipoCrearCaso" name="tipo">
              <option value="opcion1">Opcion 1</option>
              <option value="opcion2">Opcion 2</option>
              <option value="opcion3">Opcion 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="estado">Estado:</label>
          </div>
          <div>
            <select className="selectsCrear" id="estadoCrearCaso" name="estado">
              <option value="opcion1">Opcion 1</option>
              <option value="opcion2">Opcion 2</option>
              <option value="opcion3">Opcion 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="fecha">Fecha:</label>
          </div>
          <div>
            <input
              type="date"
              className="selectsCrear"
              id="fechaCrearCaso"
              name="fecha"
            />
          </div>
        </form>
        <br />
        <div>
          <button>Crear Caso</button>
        </div>

        <div className="divCerrarSesion">
          <button className="cerrar_sesion_button">Regresar</button>
        </div>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; Derechos reservados Linces 2023
        </p>
      </body>
    </>
  );
};

export default CrearCaso;
