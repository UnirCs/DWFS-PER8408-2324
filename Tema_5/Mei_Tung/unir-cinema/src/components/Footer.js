import React from "react";

export const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <i className="fa-brands fa-umbraco fa-2x"></i>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2023 UNIR Cinema</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}