import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextAutomsInfo = createContext();

const AutosInfoProvider = (props) => {
  const [guardarInfoAutos, setGuardarInfoAutos] = useState([]);
  const [estadoDetalle, setEstadoDetalle] = useState(false);

  useEffect(() => {
    try {
      const get = async () => {
        const url = "https://voltmotors.com.ar/api/exam/";

        const respuesta = await axios.get(url);
        setGuardarInfoAutos(respuesta.data.cars);
      };

      get();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ContextAutomsInfo.Provider
      value={{
        guardarInfoAutos,
        setEstadoDetalle,
        estadoDetalle,
      }}
    >
      {props.children}
    </ContextAutomsInfo.Provider>
  );
};

export default AutosInfoProvider;
