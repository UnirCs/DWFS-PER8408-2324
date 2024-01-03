import React from "react";

export const CarouselItem = (props) => {
    return (
        <div className={props.active ? 'carousel-item active' : 'carousel-item'}>
            <img className="img-fluid d-none d-md-block"
                 src={props.mdImage}
                 alt={props.title} />
            <img className="img-fluid d-block d-md-none"
                 src={props.smImage}
                 alt={props.title} />
            <div className="container">
                <div className="carousel-caption">
                    <h1><span className={`${props.captionStyle} opacity-75 shadow px-2 pb-1`}>{props.title}</span></h1>
                    {props.subtitle && <h5><span className={`${props.captionStyle} opacity-75 shadow px-2 pb-1`}>{props.subtitle}</span></h5>}
                </div>
            </div>
        </div>
    );
}