import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import logoClinica from "../img/logoClinica.png";
import "../css/CSSGeneral.css";

function Login() {
  const [usuarix, setUsuarix] = useState("");
  const [tipoU, setTipoUsuarix] = useState("");

  const { setUserInfo } = useContext(UserContext);

  function redirrecion(event) {
    event.preventDefault();
    const valorUsuarix = event.target.elements.username.value;
    setUsuarix(valorUsuarix);

    if (valorUsuarix === "Jessica") {
      setTipoUsuarix("admin");
      setUsuarix("Jessica");
    } else if (valorUsuarix === "Mike") {
      setTipoUsuarix("estudiante");
      setUsuarix("Mike");
    } else {
    }

    setUserInfo({
      nombre: `${valorUsuarix}`,
      tipo: `${tipoU}`,
    });
  }

  if (tipoU === "admin") {
    console.log("hi!");
    return <Navigate to={`/PortalAdmin/${usuarix}`} />;
  } else if (tipoU === "estudiante") {
    return <Navigate to={`/PortalEst/${usuarix}`} />;
  }

  return (
    <>
      <div>
        <img src={logoClinica} alt="Logo de la clinica" />
        <h1>Inicio de sesión</h1>
        <main className="form-signin">
          <form onSubmit={redirrecion}>
            <div className="form-floating">
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Nombre de usuario"
                name="username"
                required
              />
              <br />
              <label htmlFor="username">Nombre de usuario:</label>
            </div>

            <div className="extra"></div>

            <div className="form-floating">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Contraseña"
                name="contraseña"
                required
              />
              <br />
              <label htmlFor="password">Contraseña:</label>
            </div>

            <div className="div">
              <input type="submit" className="button" value="Iniciar sesión" />
            </div>
            <p className="mt-5 mb-3 text-body-secondary">
              &copy; Derechos reservados Linces 2023
            </p>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
