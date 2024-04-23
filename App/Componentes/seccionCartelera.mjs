import { CrearImg, CrearDiv } from "./funciones.mjs";
import { Carrusel } from "./cargaInicio.mjs";
const carteleraApp = () => {
    const $cartelera = document.getElementById("id-cartelera");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");
    const $divMain = document.getElementById("page-car");

    $cartelera.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "block";
        $secCombo.style.display = "none";
    });

    Carrusel();

    let $divPoster = document.createElement("div");
    $divPoster.classList.add("ContenidoPoster");
    $divPoster.appendChild(CrearDiv("CARTELERA"));
    $divMain.appendChild($divPoster);

    let $li1 = document.createElement("li");
    let $li2 = document.createElement("li");
    let $li3 = document.createElement("li");

    $li1.appendChild(CrearImg("img_Poster1", "./img_peliculas/img_2/kong_2.jpg"));
    $li2.appendChild(CrearImg("img_Poster2", "./img_peliculas/img_2/michi_2.jpg"));
    $li3.appendChild(CrearImg("img_Poster3", "./img_peliculas/img_2/panda_2.jpg"));

    $li1.appendChild(CrearDiv("Macaco - acción"));
    $li2.appendChild(CrearDiv("Michi - animada"));
    $li3.appendChild(CrearDiv("Luchito - animada"));

    let $ul = document.createElement("ul");
    $ul.setAttribute("id", "GaleriaPoster");
    $ul.appendChild($li1);
    $ul.appendChild($li2);
    $ul.appendChild($li3);
    $divPoster.appendChild($ul);
};

export default carteleraApp;
