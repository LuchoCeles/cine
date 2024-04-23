import { CrearImg } from "./funciones.mjs";
const CargarInicioApp = () => {
    const $body = document.body;

    let $secCar = document.createElement("section");
    $secCar.setAttribute("id", "sec-cartelera");
    let $secIni = document.createElement("section");
    $secIni.setAttribute("id", "sec-inicio");
    let $secCom = document.createElement("section");
    $secCom.setAttribute("id", "sec-combo");
    $body.appendChild($secCar);
    $body.appendChild($secIni);
    $body.appendChild($secCom);

    let $divMainCar = document.createElement("div");
    let $divMainIni = document.createElement("div");
    let $divMainCom = document.createElement("div");

    let $divImg = document.createElement("div");
    let $divImg2 = document.createElement("div");
    let $divImg3 = document.createElement("div");

    $divImg.classList.add("contenedorImagenCartelera");
    $divImg2.classList.add("contenedorImagenCartelera");
    $divImg3.classList.add("contenedorImagenCartelera");

    $divImg.appendChild(CrearImg("carousel-image", "./img_peliculas/img_1/kong_1.jpg"));
    $divImg2.appendChild(CrearImg("carousel-image", "./img_peliculas/img_1/kong_1.jpg"));
    $divImg3.appendChild(CrearImg("carousel-image", "./img_peliculas/img_1/kong_1.jpg"));

    $divMainCar.setAttribute("id", "page-car");
    $divMainIni.setAttribute("id", "page-ini");
    $divMainCom.setAttribute("id", "page-com");

    $divMainCar.appendChild($divImg);
    $divMainIni.appendChild($divImg2);
    $divMainCom.appendChild($divImg3);

    let $btnA = document.createElement("button");
    let $btnS = document.createElement("button");
    let $btnA1 = document.createElement("button");
    let $btnS1 = document.createElement("button");
    let $btnA2 = document.createElement("button");
    let $btnS2 = document.createElement("button");

    $btnA.classList.add("btnA");
    $btnS.classList.add("btnS");
    $btnA1.classList.add("btnA");
    $btnS1.classList.add("btnS");
    $btnA2.classList.add("btnA");
    $btnS2.classList.add("btnS");

    $btnA.textContent = "<";
    $btnS.textContent = ">";
    $btnA1.textContent = "<";
    $btnS1.textContent = ">";
    $btnA2.textContent = "<";
    $btnS2.textContent = ">";

    $divImg.appendChild($btnA);
    $divImg.appendChild($btnS);
    $divImg2.appendChild($btnA1);
    $divImg2.appendChild($btnS1);
    $divImg3.appendChild($btnA2);
    $divImg3.appendChild($btnS2);

    $secCar.appendChild($divMainCar);
    $secIni.appendChild($divMainIni);
    $secCom.appendChild($divMainCom);

    $btnA.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS.addEventListener("click", () => {
        imagenAnterior();
    });
    $btnA1.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS1.addEventListener("click", () => {
        imagenAnterior();
    });
    $btnA2.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS2.addEventListener("click", () => {
        imagenAnterior();
    });
}

let i = 0;
const $imagenes = [
    "./img_peliculas/img_1/kong_1.jpg",
    "./img_peliculas/img_1/michi_1.jpg",
    "./img_peliculas/img_1/panda_1.jpg"
];

const mostrarImagen = (index) => {
    const $image = document.querySelector(".carousel-image");
    $image.src = $imagenes[index];
};

const siguienteImagen = () => {
    i = (i + 1) % $imagenes.length;
    mostrarImagen(i);
};

const imagenAnterior = () => {
    i = (i - 1 + $imagenes.length) % $imagenes.length;
    mostrarImagen(i);
};
export const Carrusel = () => {
    setInterval(siguienteImagen, 3000);
}
export default CargarInicioApp;