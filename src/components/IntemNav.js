import React, { useContext } from "react";
import { ContextAutomsInfo } from "../context/ContextAutosInfo";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

const ContainerNavItem = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  text-align: center;
  justify-content: space-around;
  background: #313131;
  position: absolute;
  height: 100px;
  transition-delay: 1s;
  margin-top: 193px;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const ItemNav = () => {
  const { guardarInfoAutos, setEstadoDetalle } = useContext(ContextAutomsInfo);

  const history = useHistory();

  const onClick = (model) => {
    history.push(`/productosdetalles/${model}`);
    setEstadoDetalle(true);
  };

  return (
    <ContainerNavItem>
      {guardarInfoAutos.map((item) => (
        <h2 onClick={() => onClick(item.model)}>{item.model}</h2>
      ))}
    </ContainerNavItem>
  );
};

export default ItemNav;
