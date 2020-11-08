import React from "react";
import styled from "@emotion/styled";

const ContainerClientes = styled.div`
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(34, 34, 34, 1.75);
  border-bottom: solid 15px red;

  img {
    width: 90px;
    height: 90px;
    margin: 10px;
  }
`;

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 20px;
  color: red;

  h6 {
    border-bottom: solid 2px;

    font-size: 1.6rem;
    width: 230px;
  }
`;

const Clientes = () => {
  return (
    <>
      <ContainerTitulo>
        <h6>Nuestros Clientes</h6>
      </ContainerTitulo>

      <ContainerClientes>
        <img src="/assets/img.jpg" alt="" />
        <img src="/assets/img.jpg" alt="" />
        <img src="/assets/img.jpg" alt="" />
        <img src="/assets/img.jpg" alt="" />
        <img src="/assets/img.jpg" alt="" />
        <img src="/assets/img.jpg" alt="" />
      </ContainerClientes>
    </>
  );
};

export default Clientes;
