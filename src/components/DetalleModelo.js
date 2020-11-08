import React, { useContext, useEffect, useState } from "react";

import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { ContextAutomsInfo } from "../context/ContextAutosInfo";

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerAuto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
  width: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-size: cover;
  padding-top: 30px;
  h1 {
    margin-bottom: 20px;
    color: #fff;
    font-size: 3.7rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const ContainerInfoAuto = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  color: #fff;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    width: 90%;
    text-align: center;
    margin-top: 15px;
    font-weight: 300px;
    font-size: 1.6rem;
    padding: 10px;
    border-bottom: solid 1px #fff;
  }
`;

const ContainerContacto = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 40px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }

  h4 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.7rem;
    color: red;
    @media screen and (min-width: 900px) {
      padding: 30px;
      font-size: 2.6rem;
    }
  }

  input {
    width: 40%;
    padding: 10px;
    margin: 10px;
    background-color: rgba(0, 0, 255, 0.1);
    border-radius: 10px;
  }
  textarea {
    width: 95%;
    padding: 10px;
    margin: 10px;
    background-color: rgba(0, 0, 255, 0.1);
    border-radius: 10px;
    @media screen and (min-width: 900px) {
      width: 60%;
    }
  }
  button {
    background: red;
    border-radius: 25px;
    text-transform: uppercase;
    color: #fff;
    padding: 7px 10px;
    text-align: center;
    font-size: 0.9rem;
    border: 3px solid red;
    margin: 4px 10px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
const ContainerInputNombre = styled.div`
  display: flex;
`;

const DetalleModelo = () => {
  const { guardarInfoAutos, setEstadoDetalle } = useContext(ContextAutomsInfo);

  const [imprimirModel, setImprimirModel] = useState();

  const history = useHistory();

  const obtenerModel = history.location.pathname;

  const model = obtenerModel.substr(-2);

  useEffect(() => {
    const filter = guardarInfoAutos.filter((auto) => auto.model === model);

    setImprimirModel(filter);
  }, [guardarInfoAutos, model]);

  useEffect(() => {
    if (model === "/") {
      setEstadoDetalle(false);
    }
  }, [model, setEstadoDetalle]);

  scroll.scrollToTop({
    duration: 2000,
  });

  return (
    <>
      {imprimirModel ? (
        <ContainerGeneral>
          {imprimirModel.map((auto) => (
            <>
              <ContainerAuto imgUrl={auto.image}>
                <h1> {auto.model} </h1>
              </ContainerAuto>

              <ContainerInfoAuto>
                <h3> {auto.caracs[0]} </h3>
                <h3> {auto.caracs[1]} </h3>
                <h3> {auto.caracs[2]} </h3>
              </ContainerInfoAuto>
              <ContainerContacto>
                <h4>Escribinos</h4>
                <form>
                  <ContainerInputNombre>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                  </ContainerInputNombre>
                  <input type="email" placeholder="Correo" />
                  <input type="number" placeholder="Número de Teléfono" />
                  <input type="text" placeholder="Ciudad" />
                  <textarea placeholder="Mensaje"></textarea>
                  <div>
                    <button>Enviar</button>
                  </div>
                </form>
              </ContainerContacto>
            </>
          ))}
        </ContainerGeneral>
      ) : null}
    </>
  );
};

export default DetalleModelo;
