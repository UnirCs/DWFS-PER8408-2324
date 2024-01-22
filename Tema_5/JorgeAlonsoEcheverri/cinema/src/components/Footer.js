import React from "react";

export const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
                            <h6 className="text-uppercase fw-bold mb-4">UNIR Cinema</h6>
                            <p><i className="bi bi-geo-alt-fill me-1"></i> Calle 28</p>
                            <p><i className="bi bi-telephone-fill me-1"></i> 012 345 6789</p>
                            <p><i className="bi bi-envelope me-1"></i> hola@unircinema.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center text-white p-4 bg-dark">
                © 2023 Copyright: <a className="text-reset fw-bold" href="/">UNIR Cinema</a>
            </div>
        </footer>
    );
}