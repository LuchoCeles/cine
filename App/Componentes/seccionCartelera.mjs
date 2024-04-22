import { CrearImg, CrearLi } from "./funciones.mjs";
const carteleraApp = () => {
    const $cartelera = document.getElementById("id-cartelera");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");

    $cartelera.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "block";
        $secCombo.style.display = "none";
    });

    let $divMain = document.createElement("div");
    let $divImg = document.createElement("div");
    $divImg.classList.add("contenedorImagenCartelera");

    $divMain.classList.add("page");
    $secCartelera.appendChild($divMain);
    $divMain.appendChild($divImg);

    let $btnA = document.createElement("button");
    let $btnS = document.createElement("button");
    $btnA.classList.add("btnA");
    $btnS.classList.add("btnS");
    $btnA.textContent = "<";
    $btnS.textContent = ">";
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

    let $divPoster = document.createElement("div");
    $divPoster.classList.add("ContenidoPoster");
    $divMain.appendChild($divPoster);
    let $contenido = document.createElement("p");
    $contenido.textContent = "Cartelera";
    $divPoster.appendChild($contenido);
    $divPoster.appendChild(CrearImg("img_Poster1", "./img_peliculas/img_2/kong_2.jpg"));
    $divPoster.appendChild(CrearImg("img_Poster2", "./img_peliculas/img_2/michi_2.jpg"));
    $divPoster.appendChild(CrearImg("img_Poster3", "./img_peliculas/img_2/panda_2.jpg"));
};

export default carteleraApp;
