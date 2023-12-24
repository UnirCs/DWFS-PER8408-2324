import {useEffect, useState} from "react";

export const useBotones = () => {

    const [botones, setBotones] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setBotones([
                {label:  "Propietarios", enlace:  "/propietarios"},
                {label:  "Apartamentos", enlace:  "/apartamentos"},
                {label:  "Validador", enlace:  "/validador"},
                {label:  "Pagos", enlace:  "/pagos"},
                {label:  "Acerca", enlace:  "/acerca"}
            ]);
        }, 50);
    }, []);

    return botones;
}