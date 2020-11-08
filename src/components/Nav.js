import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import ItemNav from "./IntemNav";

const ContainerGeneralNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #313131;
  padding-bottom: 20px;
  padding-top: 10px;
  @media screen and (min-width: 700px) {
    justify-content: space-around;
  }
`;

const ContainerTituloNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 50px;
    height: 60px;
    padding: 10px;
    margin: 10px;
  }
  h1 {
    width: 50px;
    padding-top: 10px;
    color: #fff;
    font-size: 3.3rem;
    line-height: 1.7rem;
  }
  span {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 700px) {
    img {
      display: none;
    }
    h1 {
      width: 100%;
    }
    span {
      font-size: 1.8rem;
    }
  }
`;

const ContainerNav = styled.div`
  img {
    width: 35px;
    padding: 5px;
    border: 2px solid #211e1e;
    margin: 20px;
    cursor: pointer;
  }
  a {
    display: none;
  }
  @media screen and (min-width: 700px) {
    img {
      display: none;
    }

    a {
      display: block;
      font-size: 2.4rem;
      margin: 20px;
      color: #fff;
      text-decoration: none;

      &:hover {
        background: red;
        padding: 7px;
        transition: 1s;
        border-radius: 15px;
      }
    }

    display: flex;
  }
`;

const Nav = () => {
  const [estadoModal, setEstadoModal] = useState(false);

  const onClickModal = () => {
    if (estadoModal === true) {
      setEstadoModal(false);
    } else {
      setEstadoModal(true);
    }
  };

  return (
    <>
      <ContainerGeneralNav>
        <ContainerTituloNav>
          <img src="/assets/img.jpg" alt="" />
          <h1>
            Volt <span>Automotores</span>
          </h1>
        </ContainerTituloNav>
        <ContainerNav>
          <Link to="/productosdetalles/z1">Z1</Link>
          <Link to="/productosdetalles/w1">W1</Link>
          <Link to="/productosdetalles/e1">E1</Link>
          <img onClick={onClickModal} src="/assets/bars-solid.svg" alt="" />
        </ContainerNav>

        {estadoModal ? <ItemNav /> : null}
      </ContainerGeneralNav>
    </>
  );
};

export default Nav;
