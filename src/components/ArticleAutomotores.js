import React from "react";
import styled from "@emotion/styled";

const ContainerGeneral = styled.div`
  background: url("/assets/fondo-calle.jpg"), no-repeat, center, fixed;
  background-size: cover;
  height: 400px;
  width: 100%;
  text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    height: 400px;
  }
`;

const ContainerInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 90%;
  color: #fff;
  @media screen and (min-width: 900px) {
    height: 200px;
    width: 60%;
  }
`;

const ContainerDescripcion = styled.div`
  font-size: 1.7rem;

  @media screen and (min-width: 900px) {
    margin-top: 30px;
  }
`;

const ContainerVehiculos = styled.div`
  font-size: 1.4rem;
  @media screen and (min-width: 900px) {
    margin-top: 10px;
  }
`;

const ArticleAutomotores = () => {
  return (
    <ContainerGeneral>
      <ContainerInfo>
        <ContainerDescripcion>
          <p>Descripcion Detalles de vehiculo</p>
          <p>Modelos</p>
        </ContainerDescripcion>
        <ContainerVehiculos>
          <p> Los Mejores Vehiculos E1 W1 Z1 </p>
        </ContainerVehiculos>
      </ContainerInfo>
    </ContainerGeneral>
  );
};

export default ArticleAutomotores;
