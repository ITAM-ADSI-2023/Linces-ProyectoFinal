import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/CSSGeneral.css";

const CrearCaso = () => {
  const { userInfo } = useContext(UserContext);
  const [redireccion, setRedireccion] = useState(false);
  console.log(userInfo);

  function aPortal() {
    setRedireccion(true);
  }

  if (redireccion) {
    return <Navigate to="/" />;
  }

  console.log(userInfo);
  return (
    <>
      <head>
        <link href="CSSGeneral.css" rel="stylesheet" />
      </head>
    </>
  );
};
export default CrearCaso;
