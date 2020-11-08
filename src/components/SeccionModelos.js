import React, { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { ContextAutomsInfo } from "../context/ContextAutosInfo";

import DetalleModelo from "./DetalleModelo";

const ContainerAuto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-size: cover;

  h2 {
    font-size: 2.3rem;
    margin-left: 20px;
    text-transform: uppercase;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    margin-left: 20px;
    position: absolute;
    padding-bottom: 20px;
    color: #fff;
  }
  @media screen and (min-width: 900px) {
    height: 400px;
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  padding-bottom: 10px;

  button {
    background-color: rgba(201, 76, 76, 0);
    border-radius: 25px;
    text-transform: uppercase;
    color: #fff;
    padding: 7px 10px;
    text-align: center;
    font-size: 0.9rem;
    border: 3px solid #fff;
    margin: 4px 2px;
    background: transparent;

    cursor: pointer;
    &:hover {
      background: red;
    }
  }
`;

const SeccionModelos = () => {
  const { guardarInfoAutos, estadoDetalle, setEstadoDetalle } = useContext(
    ContextAutomsInfo
  );

  const history = useHistory();

  const onClickExplorar = (model) => {
    history.push(`/productosdetalles/${model}`);
    setEstadoDetalle(true);
  };

  scroll.scrollToTop({
    duration: 2000,
  });

  return (
    <>
      {estadoDetalle ? (
        <DetalleModelo />
      ) : (
        guardarInfoAutos.map((auto) => (
          <ContainerAuto imgUrl={auto.image}>
            <h2> {auto.model} </h2>
            <p> {auto.description} </p>
            <ContainerBtn>
              <button onClick={() => onClickExplorar(auto.model)}>
                Explorar
              </button>
            </ContainerBtn>
          </ContainerAuto>
        ))
      )}
    </>
  );
};

export default SeccionModelos;
