import React from "react";
import { NotFound } from "../components/NotFound";
import { Trapecio } from "../components/Trapecio";
import { Rombo } from "../components/Rombo";
import { Triangulo } from "../components/Triangulo";
import { Cuadrado } from "../components/Cuadrado";
import { Header } from "../components/CompCustHook";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const GeometricRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cuadrado/:id" element={<Cuadrado />} />
        <Route path="/Triangulo/" element={<Triangulo />} />
        <Route caseSensitive path="/rombo/" element={<Rombo />} />
        <Route path="/trapecio" element={<Trapecio />} />
        <Route path="/hook" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
