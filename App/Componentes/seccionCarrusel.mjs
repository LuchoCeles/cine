import { CrearBoton,CrearImg } from "./funciones.mjs";
const carruselApp = () => {
    const $secCarrusel = document.getElementById("sec-carrusel");
    let $divMain = document.createElement("div");
    let $divImg = document.createElement("div");
    $divImg.classList.add("contenedorImagenCartelera");

    $divMain.classList.add("page");
    $divMain.appendChild($divImg);
    $secCarrusel.appendChild($divMain);
    let $btnA = CrearBoton("btnA","<");
    let $btnS = CrearBoton("btnS",">");

    $divImg.appendChild($btnA);
    $divImg.appendChild($btnS);


    $divImg.appendChild(CrearImg("carousel-image", "./img_peliculas/img_1/kong_1.jpg"));
    let i = 0;
    const $imagenes = [
        "./img_peliculas/img_1/kong_1.jpg",
        "./img_peliculas/img_1/michi_1.jpg",
        "./img_peliculas/img_1/panda_1.jpg"
    ];
    const $image = document.querySelector(".carousel-image");
    const mostrarImagen = (index) => {
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

    $btnA.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS.addEventListener("click", () => {
        imagenAnterior();
    });

    setInterval(siguienteImagen, 3000);
}
export default carruselApp;