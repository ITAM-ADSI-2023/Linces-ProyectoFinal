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

        <div>
          <form class="formCrearCaso">
            <div>
              <label for="nombre">Nombre:</label>
            </div>
            <div>
              <input
                type="text"
                class="selectsCrear"
                id="nombreCrearCaso"
                name="nombre"
              />
            </div>

            <div>
              <label for="iniciales">Iniciales:</label>
            </div>
            <div>
              <input
                type="text"
                class="selectsCrear"
                id="inicialesCrearCaso"
                name="iniciales"
              />
            </div>

            <div>
              <label for="descripcion">Descripción del Caso:</label>
            </div>
            <div>
              <input
                type="text"
                class="selectsCrear"
                id="descripcionCrearCaso"
                name="descripcion"
              />
            </div>

            <div>
              <label for="tipo">Tipo de Caso:</label>
            </div>
            <div>
              <select class="selectsCrear" id="tipoCrearCaso" name="tipo">
                <option value="opcion1">Opcion 1</option>
                <option value="opcion2">Opcion 2</option>
                <option value="opcion3">Opcion 3</option>
              </select>
            </div>

            <div>
              <label for="estado">Estado:</label>
            </div>
            <div>
              <select class="selectsCrear" id="estadoCrearCaso" name="estado">
                <option value="opcion1">Opcion 1</option>
                <option value="opcion2">Opcion 2</option>
                <option value="opcion3">Opcion 3</option>
              </select>
            </div>

            <label for="fecha">Fecha:</label>

            <div>
              <input
                type="date"
                class="selectsCrear"
                id="fechaCrearCaso"
                name="fecha"
              />
            </div>
          </form>
        </div>

        <br />
        <div>
          <button>Crear Caso</button>
        </div>

        <div class="divCerrarSesion">
          <button class="cerrar_sesion_button" onClick={aPortal}>
            Regresar
          </button>
        </div>
        <p class="mt-5 mb-3 text-body-secondary">
          &copy; Derechos reservados Linces 2023
        </p>
      </body>
    </>
  );
};

export default CrearCaso;
