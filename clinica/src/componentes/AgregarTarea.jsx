import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/CSSGeneral.css";
import UserContext from "../context/UserContext";
import CasosContext from "../context/CasoContext";
import { useEffect } from "react";

const AgregarTarea = () => {
  const params = useParams();

  const { userInfo } = useContext(UserContext);
  const { casos, setCasos } = useContext(CasosContext);

  const [estudiante, setEstudiante] = useState("");
  const [fecha, setFecha] = useState("");
  const [nombreCaso, setNombreCaso] = useState("");
  const [estatusCaso, setEstatusCaso] = useState("");
  const [nota, setNota] = useState("");

  useEffect(() => {
    for (let i = 0; i < casos.length; i++) {
      if (casos[i].iniciales == params.id) {
        setNombreCaso(casos[i].nombre);
        setEstatusCaso(casos[i].estado);
      }
    }
  });

  const addTarea = () => {
    let newCasos = casos;

    const newTarea = {
      estudiante: estudiante,
      fecha: fecha,
      caso: params.id,
      estatus: estatusCaso,
      nota: nota,
    };

    for (let i = 0; i < casos.length; i++) {
      if (newCasos[i].iniciales === params.id) {
        newCasos[i].tareas.push(newTarea);
      }
    }

    setCasos(newCasos);
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
            <option value={`${nombreCaso}`}>{nombreCaso}</option>
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
            onChange={(e) => setEstatusCaso(e.target.value)}
          >
            <option
              selected={estatusCaso === "InvestigacionAbogadxs"}
              value="InvestigacionAbogadxs"
            >
              Investigación abogadxs
            </option>
            <option
              selected={estatusCaso === "SinPresentar"}
              value="SinPresentar"
            >
              Sin presentar
            </option>
            <option
              selected={estatusCaso === "InicioDemanda"}
              value="InicioDemanda"
            >
              Inicio de la demanda
            </option>
            <option
              selected={estatusCaso === "InvestigacionTribunales"}
              value="InvestigacionTribunales"
            >
              Investigación tribunales
            </option>
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
