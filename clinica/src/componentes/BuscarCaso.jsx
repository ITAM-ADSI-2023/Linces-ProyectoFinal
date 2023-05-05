import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import CasosContext from "../context/CasoContext";
import "../css/CSSGeneral.css";

const BuscarCaso = () => {
  //Contextos
  const { userInfo } = useContext(UserContext);
  const { casos, setCasos } = useContext(CasosContext);

  //Estados para manejar la redirección de páginas
  const [usuarix, setUsuarix] = useState("");
  const [tipo, setTipo] = useState("");
  const [redireccion, setRedireccion] = useState(false);

  //Estados para filtrar
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroIniciales, setFiltroIniciales] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  //Función para filtrar
  const showResultados = () => {
    const listaResultados = [];

    console.log(casos);

    for (let i = 0; i < casos.length; i++) {
      if (filtroNombre == "" || filtroNombre == casos[i].nombre) {
        if (filtroTipo == "" || filtroTipo == casos[i].tipoDeCaso) {
          if (filtroEstado == "" || filtroEstado == casos[i].estado) {
            listaResultados.push(
              <div class="grid-item">{casos[i].nombre}</div>
            );
          }
        }
      }
    }

    return listaResultados;
  };

  //cambiarlo a algo onClick
  useEffect(() => {
    showResultados();
  }, [filtroEstado, filtroIniciales, filtroTipo]);

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
              onChange={(e) => setFiltroNombre(e.target.value)}
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
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <option value=""></option>
            <option value="opcion1">Violencia doméstica</option>
            <option value="opcion2">Discriminación</option>
            <option value="opcion3">Acoso</option>
          </select>
          <label for="nombreIn">Nombre/iniciales:</label>
          <select
            class="selectsBuscar"
            id="nombreInBusquedaCaso"
            name="nombreIn"
            onChange={(e) => setFiltroIniciales(e.target.value)}
          >
            <option value=""></option>
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
          </select>
          <label for="estado">Estado:</label>
          <select
            class="selectsBuscar"
            id="estadoBusquedaCaso"
            name="estado"
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option value=""></option>
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
          </select>
        </div>
        <br />
        <div class="grid-container">
          <h2>Lista de resultados:</h2>
          {showResultados()}
        </div>
        <br />
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

export default BuscarCaso;
