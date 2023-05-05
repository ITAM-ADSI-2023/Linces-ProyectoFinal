import { createContext } from "react";

const CasoContext = createContext({
  casos: [
    {
      nombre: "",
      iniciales: "",
      descripcionDelCaso: "",
      tipoDeCaso: "",
      estado: "",
      fecha: "",
      tareas: [
        {
          nombre: "Tarea1",
        },
        {
          nombre: "Tarea2",
        },
      ],
    },
  ],
  setCasos: () => {},
});

export default CasoContext;
