import React from "react";

export const Header = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center gap-2 py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <i className="fa-brands fa-umbraco fa-2x pe-2"></i>
                <span className="fs-4">UNIR Cinema</span>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control" placeholder="Buscar película..." />
            </form>
        </header>
    );
}