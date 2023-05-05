import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import CasosContext from "../context/CasoContext";
import "../css/CSSGeneral.css";
import { useEffect } from "react";

const CrearCaso = () => {
  const { userInfo } = useContext(UserContext);
  const { casos, setCasos } = useContext(CasosContext);

  const [usuarix, setUsuarix] = useState("");
  const [redireccion, setRedireccion] = useState(false);

  const [nombreCaso, setNombreCaso] = useState("");
  const [iniciales, setIniciales] = useState("");
  const [descripcionCaso, setDescripcionCaso] = useState("");
  const [tipoCaso, setTipoCaso] = useState("");
  const [estado, setEstado] = useState("");
  const [fecha, setFecha] = useState("");

  const createCasoNuevo = () => {
    console.log(casos);
    if (casos[0].nombre == "") {
      setCasos([
        {
          nombre: nombreCaso,
          iniciales: iniciales,
          descripcionDelCaso: descripcionCaso,
          tipoDeCaso: tipoCaso,
          estado: estado,
          fecha: fecha,
          tareas: [],
        },
      ]);
    } else {
      const newCasos = casos;
      newCasos.push({
        nombre: nombreCaso,
        iniciales: iniciales,
        descripcionDelCaso: descripcionCaso,
        tipoDeCaso: tipoCaso,
        estado: estado,
        fecha: fecha,
        tareas: [],
      });
      setCasos(newCasos);
    }
  };

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
              onChange={(e) => setNombreCaso(e.target.value)}
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
              onChange={(e) => setIniciales(e.target.value)}
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
              onChange={(e) => setDescripcionCaso(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="tipo">Tipo de Caso:</label>
          </div>
          <div>
            <select
              className="selectsCrear"
              id="tipoCrearCaso"
              name="tipo"
              value={tipoCaso}
              onChange={(e) => setTipoCaso(e.target.value)}
            >
              <option value="opcion1">Opcion 1</option>
              <option value="opcion2">Opcion 2</option>
              <option value="opcion3">Opcion 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="estado">Estado:</label>
          </div>
          <div>
            <select
              className="selectsCrear"
              id="estadoCrearCaso"
              name="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
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
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
        </form>
        <br />
        <Link to={`/DetallesCaso/${nombreCaso}`}>
          <button onClick={createCasoNuevo}>Crear Caso</button>
        </Link>

        <div className="divCerrarSesion">
          <button className="cerrar_sesion_button" onClick={aPortal}>
            Regresar
          </button>
        </div>
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; Derechos reservados Linces 2023
        </p>
      </body>
    </>
  );
};

export default CrearCaso;
