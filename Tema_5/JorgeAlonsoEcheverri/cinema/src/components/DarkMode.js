import React from "react";

export const DarkMode = () => {

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        let spans = Array.from(
            document.getElementsByClassName('movie-info-card')
        );

        spans.forEach(element => {
            element.classList.toggle('dark-mode');
        });

        let movies = Array.from(
            document.getElementsByClassName('movie-details')
        );

        movies.forEach(element => {
            element.classList.toggle('dark-mode');
        });
    }

    return (
        <div className="form-check form-switch dark-mode-section">
            <input className="form-check-input" type="checkbox" id="darkSwitch" onChange={toggleDarkMode} />
            <label className="form-check-label" htmlFor="darkSwitch">Modo Oscuro</label>
        </div>
    );
}