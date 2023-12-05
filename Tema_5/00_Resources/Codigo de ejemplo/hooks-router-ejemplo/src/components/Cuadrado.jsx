import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const Cuadrado = () => {
  const location = useLocation();
  console.log(location);
  const { id } = useParams();

  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("param");
  console.log(paramValue);
  
  return <div className="cuadrado">Cuadrado {id}</div>;
};
