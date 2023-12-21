import React from "react";
import '../styles/Carousel.css';
import {CarouselItem} from "./CarouselItem";

export const Carousel = () => {
    const items = [
        {
            title: "Navidad en Candy Cane Lane",
            subtitle: "",
            active: true,
            captionStyle: "text-bg-danger",
            mdImage: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/11/navidad-candy-cane-lane-3218072.jpg",
            smImage: "https://m.media-amazon.com/images/M/MV5BMTU3MWYzNzEtZmYwNS00ZjhjLTljMTQtYzk5NTk1ZTJkYTZjXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg"
        }, {
            title: "Los juegos del hambre",
            subtitle: "Balada de pájaros cantores y serpientes",
            active: false,
            captionStyle: "text-bg-gold",
            mdImage: "https://sm.ign.com/ign_nordic/review/t/the-hunger/the-hunger-games-the-ballad-of-songbirds-and-snakes-review_kzyk.jpg",
            smImage: "https://www.nfbio.se/sites/nfbio.se/files/styles/movie_poster/public/media-images/2023-10/Hunger_Games_5_web.jpg?itok=ykqQZkib"
        }, {
            title: "Plan en familia",
            subtitle: "",
            active: false,
            captionStyle: "text-bg-light",
            mdImage: "https://www.apple.com/tv-pr/articles/2023/11/apple-original-films-unveils-trailer-for-the-family-plan/images/big-image/big-image-01/110623_Apple_Unveils_Trailer_Family_Plan_Big_Image_01_big_image_post.jpg.slideshow_large.jpg",
            smImage: "https://es.web.img2.acsta.net/pictures/23/11/07/13/12/5197921.jpg"
        }
    ];

    return (
        <div id="billboard" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            active={item.active}
                            captionStyle={item.captionStyle}
                            mdImage={item.mdImage}
                            smImage={item.smImage} />
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#billboard" data-bs-slide="prev">
                <i className="fa-3x fa-solid fa-circle-chevron-left text-white"></i>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#billboard" data-bs-slide="next">
                <i className="fa-3x fa-solid fa-circle-chevron-right text-white"></i>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
}