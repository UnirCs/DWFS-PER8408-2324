import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from "../components/NotFound";
import ApartamentoDetails from '../views/ApartamentoDetails';
import ApartamentoValidar from '../views/ApartamentoValidar';
import PagoView from '../views/PagoView';
import { Propietarios } from "../views/Propietarios";
import {Overview} from "../views/Overview";
import {Landing} from "../views/Landing";
import {Validador} from "../views/Validador";
import {Pagos} from "../views/Pagos";
import {Acerca} from "../views/Acerca";
import {BarraNavegador} from "../components/BarraNavegador";
export const AdminRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/propietarios/" element={<Layout><Propietarios /></Layout>} />
                <Route path="/apartamentos/" element={<Layout><Overview /></Layout>} />
                <Route path="/apartamentos/:apartamentoUnidad" element={<Layout><ApartamentoDetails /></Layout>} />
                <Route path="/validador/:apartamentoUnidad" element={<Layout><ApartamentoValidar /></Layout>} />
                <Route path="/validador/" element={<Layout><Validador /></Layout>} />
                <Route path="/pagos/" element={<Layout><Pagos /></Layout>} />
                <Route path="/pagos/:apartamentoUnidad" element={<Layout><PagoView /></Layout>} />
                <Route path="/acerca/" element={<Layout><Acerca /></Layout>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

const Layout = ({children}) => (
    <>
        <BarraNavegador></BarraNavegador>
        {children}
    </>
);

