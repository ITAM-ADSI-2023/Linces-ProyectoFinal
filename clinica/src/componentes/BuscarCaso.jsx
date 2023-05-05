import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";

const BuscarCaso = () => {
  const { userInfo } = useContext(UserContext);
  const [usuarix, setUsuarix] = useState("");
  const [tipo, setTipo] = useState("");
  const [redireccion, setRedireccion] = useState(false);
  console.log(userInfo);

  function aPortal() {
    setRedireccion(true);
    setUsuarix(userInfo.name);
    setTipo(userInfo.tipo);
  }

  if (redireccion) {
    return <Navigate to={`/Portal${tipo}/${usuarix}`} />;
  }

  return (
    <>
      <head>
        <link href="../css/CSSGeneral.css" rel="stylesheet" />
      </head>
      <body>
        <h2>Buscar Caso</h2>
        <div>
          <form>
            <input
              type="text"
              class="textBoxBuscar"
              name="search"
              placeholder="Buscar..."
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <br />
        <div>
          <label for="tipoDelito">Tipo Delito:</label>
          <select
            class="selectsBuscar"
            id="tipoDelitoBusquedaCaso"
            name="tipoDelito"
          >
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
          </select>
          <label for="nombreIn">Nombre/iniciales:</label>
          <select
            class="selectsBuscar"
            id="nombreInBusquedaCaso"
            name="nombreIn"
          >
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
          </select>
          <label for="estado">Estado:</label>
          <select class="selectsBuscar" id="estadoBusquedaCaso" name="estado">
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
          </select>
        </div>
        <br />
        <div class="grid-container">
          <h2>Lista de resultados:</h2>
          <div class="grid-item">Resultado 1</div>
          <div class="grid-item">Resultado 2</div>
          <div class="grid-item">Resultado 3</div>
        </div>
        <br />
        <div class="divCerrarSesion">
          <button class="cerrar_sesion_button">Regresar</button>
        </div>

        <p class="mt-5 mb-3 text-body-secondary">
          &copy; Derechos reservados Linces 2023
        </p>
      </body>
    </>
  );
};

export default BuscarCaso;
