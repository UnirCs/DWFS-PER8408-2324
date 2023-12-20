import React from "react";

export const Movie = (props) => {
    return(
        <div className="col">
            <div className="card shadow-sm">
                <img className="card-img-top" src={props.image} alt={props.title} />
                <div className="card-body d-grid gap-3">
                    <div className="d-flex gap-3">
                    {
                        props.genres.map((genre, index) => {
                            return <span key={index} className="badge rounded-pill text-bg-light">{genre}</span>;
                        })
                    }
                    </div>
                    <h5 className="card-title">{props.title}</h5>
                    <div className="multi-line-text-truncate">{props.synopsis}</div>
                    <div className="d-flex justify-content-between align-items-center small">
                        <div>
                            <i className="fa-solid fa-clock text-success pe-1"></i>
                            <span className="text-body-secondary">{props.duration}</span>
                        </div>
                        <div>
                            <span>{props.rating}/10</span>
                            <i className="fa-solid fa-star text-warning ps-1"></i>
                        </div>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-light">Reservar</button>
                </div>
            </div>
        </div>
    );
}