import React, { useContext, useEffect, useState } from "react";
import { GeoContext } from "./GeoContext";
import {useNavigate} from "react-router";

export const Rombo = () => {
  const [clicks, setClicks] = useState(0);
  const { globalClicks, updateClicks } = useContext(GeoContext);
  const navigate = useNavigate();

  console.log("Renderizando Rombo...");

  useEffect(() => {
    console.log("Efecto de montaje ejecutado");
  }, []);
  useEffect(() => {
    console.log("Efecto con cualquier dependencia ejecutado");
  });
  useEffect(() => {
    console.log("Efecto ligado a click local");
  }, [clicks]);
  useEffect(() => {
    console.log("Efecto ligado a click global");
  }, [globalClicks]);

  return (
    <div className="rombo">
      Rombo
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
      <button onClick={() => updateClicks()}>{globalClicks}</button>
      <button onClick={() => navigate("/trapecio/")}>Ir a trapecio</button>
    </div>
  );
};
