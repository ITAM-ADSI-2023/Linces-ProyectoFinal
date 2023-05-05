import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/CSSGeneral.css";
import UserContext from "../context/UserContext";
import CasosContext from "../context/CasoContext";

const AgregarTarea = () => {
  const params = useParams();

  const { userInfo } = useContext(UserContext);
  const { casos } = useContext(CasosContext);

  const [estudiante, setEstudiante] = useState("");
  const [fecha, setFecha] = useState("");
  const [estatus, setEstatus] = useState("");
  const [nota, setNota] = useState("");

  const addTarea = () => {
    console.log(casos);

    const newTarea = {
      estudiante: estudiante,
      fecha: fecha,
      caso: params.id,
      estatus: estatus,
      nota: nota,
    };

    let newCasos = casos;
    for (let i = 0; i < casos.length; i++) {
      if (newCasos[i].nombre === params.id) {
        newCasos[i].tareas.push(newTarea);
      }
    }
  };

  return (
    <body>
      <h2>Agregar Tarea</h2>

      <form class="formAgregarTarea">
        <div>
          <label for="estudiante">
            Estudiante al que se le asigna el caso:
          </label>
        </div>
        <div>
          <select
            class="selectsCrear"
            id="estudianteAgregarTarea"
            name="estudiante"
            onChange={(e) => setEstudiante(e.target.value)}
          >
            <option value=""></option>
            <option value="Mike">Mike</option>
            <option value="Troy">Troy</option>
            <option value="Sharpay">Sharpay</option>
          </select>
        </div>

        <div>
          <label for="fecha">Fecha de entrega:</label>
        </div>
        <div>
          <input
            class="selectsCrear"
            type="date"
            id="fechaAgregarTarea"
            name="fecha"
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label for="estatus">Caso:</label>
        </div>
        <div>
          <select
            class="selectsCrear"
            id="estatusAgregarTarea"
            name="caso"
            disabled
          >
            <option value={`${params.id}`}>{params.id}</option>
            {/* {getCasos()} */}
          </select>
        </div>

        <div>
          <label for="estatus">Estatus del caso:</label>
        </div>
        <div>
          <select
            class="selectsCrear"
            id="estatusAgregarTarea"
            name="estatus"
            onChange={(e) => setEstatus(e.target.value)}
          >
            <option value=""></option>
            <option value="opcion1">Opcion 1</option>
            <option value="opcion2">Opcion 2</option>
            <option value="opcion3">Opcion 3</option>
          </select>
        </div>
      </form>
      <div class="divNota">
        <label for="nota">Nota:</label>
        <textarea
          class="espacioNota"
          id="notaAgregarTarea"
          name="nota"
          rows="4"
          cols="50"
          onChange={(e) => setNota(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button id="btnAgregarTarea" onClick={addTarea}>
          Agregar Tarea
        </button>
      </div>

      <div class="divCerrarSesion">
        <Link to={`/DetallesCaso/${params.id}`}>
          <button
            class="cerrar_sesion_button"
            type="button"
            id="btnRegresarCasoAgregarTarea"
          >
            Regresar a Caso
          </button>
        </Link>

        <Link to={`/PortalAdmin/${userInfo.name}`}>
          <button
            class="cerrar_sesion_button"
            type="button"
            id="btnRegrearPortalAgregarTarea"
          >
            Regresar al Portal
          </button>
        </Link>
      </div>
      <p class="mt-5 mb-3 text-body-secondary">
        &copy; Derechos reservados Linces 2023
      </p>
    </body>
  );
};

export default AgregarTarea;
