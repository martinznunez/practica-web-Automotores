import React from "react";
import styled from "@emotion/styled";

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerTitulo = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;

  img {
    width: 50px;
    height: 40px;
    margin: 10px;
  }
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 0, 0, 1);
  height: 200px;
  color: #fff;

  input {
    margin-top: 10px;
    padding: 5px;
    width: 50%;
    @media screen and (min-width: 900px) {
      width: 30%;
    }
  }
  button {
    margin-top: 20px;
    padding: 10px;
    width: 20%;
    border-radius: 12px;
    border: 2px solid;
    &:hover {
      background: red;
      color: #fff;
      font-size: 1.1rem;
    }
    @media screen and (min-width: 900px) {
      width: 10%;
    }
  }
`;

const FromFooter = () => {
  return (
    <ContainerGeneral>
      <ContainerTitulo>
        <img src="/assets/img.jpg" alt="" />
        <h1> Volt Motors </h1>
      </ContainerTitulo>
      <From>
        <label>Suscribite a nuestro newsletter</label>
        <input type="text" placeholder="Ingresá tu correo electronico" />
        <button>Enviar</button>
      </From>
    </ContainerGeneral>
  );
};

export default FromFooter;
