import React from "react";

export const Navbar = () => {
    return(
        <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <label className="text-nowrap me-2">Ordenar por</label>
                    <select className="form-select" defaultValue="date">
                        <option value="rating">Calificación</option>
                        <option value="date">Fecha estreno</option>
                        <option value="title">Título (A-Z)</option>
                        <option value="popularity">Popularidad</option>
                    </select>
                </div>
                <div>
                    <button type="button" className="btn" title="Lista"><i className="fa-solid fa-list"></i></button>
                    <button type="button" className="btn" title="Cuadrícula"><i className="fa-solid fa-grip"></i></button>
                </div>
            </div>
        </div>
    );
}