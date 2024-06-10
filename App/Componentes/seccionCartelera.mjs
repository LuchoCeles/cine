import { CrearDiv,loadElements } from "./funciones.mjs";
const carteleraApp = () => {
    const $cartelera = document.getElementById("id-cartelera");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");
    const $secAdmin = document.getElementById("sec-admin");
    const $secCarrusel = document.getElementById("sec-carrusel");

    $cartelera.addEventListener("click", () => {
        $secCarrusel.style.display = "block";
        $secInicio.style.display = "none";
        $secCartelera.style.display = "block";
        $secCombo.style.display = "none";
        $secAdmin.style.display = "none";
    });

    $secCartelera.style.display = "none";

    let $divMain = document.createElement("div");
    let $divCarteleraEncabezado = CrearDiv("CARTELERA");
    $divCarteleraEncabezado.classList.add("SubTitulo");

    $divMain.appendChild($divCarteleraEncabezado);

    let $divPoster = document.createElement("div");
    $divPoster.classList.add("ContenidoPoster");

    $divMain.appendChild($divPoster);
    $secCartelera.appendChild($divMain);

    let $ul = document.createElement("ul");
    $ul.setAttribute("id", "GaleriaPosterCartelera");

    loadElements($ul);

    $divPoster.appendChild($ul);
};

export default carteleraApp;
