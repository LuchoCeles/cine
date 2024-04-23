import { CrearImg, CrearDiv } from "./funciones.mjs";
const inicioApp = () => {
    const $inicio = document.getElementById("id-inicio");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");

    $inicio.addEventListener("click", () => {
        $secInicio.style.display = "block";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "none";
    });

    let $divMain = document.createElement("div");
    let $divImg = document.createElement("div");
    $divImg.classList.add("IniciocontenedorImagenCartelera");

    $divMain.classList.add("page");
    $secInicio.appendChild($divMain);
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

    const $image = document.querySelector(".carousel-image");
    
    let i = 0;
    const $imagenes = [
        "./img_peliculas/img_1/kong_1.jpg",
        "./img_peliculas/img_1/michi_1.jpg",
        "./img_peliculas/img_1/panda_1.jpg"
    ];
    
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
    $divPoster.appendChild(CrearDiv("CARTELERA"));
    $divMain.appendChild($divPoster);

    let $li1 = document.createElement("li");
    let $li2 = document.createElement("li");
    let $li3 = document.createElement("li");

    $li1.appendChild(CrearImg("img_Poster1", "./img_peliculas/img_2/kong_2.jpg"));
    $li2.appendChild(CrearImg("img_Poster2", "./img_peliculas/img_2/michi_2.jpg"));
    $li3.appendChild(CrearImg("img_Poster3", "./img_peliculas/img_2/panda_2.jpg"));

    $li1.appendChild(CrearDiv("Macaco"));
    $li2.appendChild(CrearDiv("Michi"));
    $li3.appendChild(CrearDiv("Luchito"));

    let $ul = document.createElement("ul");
    $ul.setAttribute("id", "GaleriaPoster");
    $ul.appendChild($li1);
    $ul.appendChild($li2);
    $ul.appendChild($li3);
    $divPoster.appendChild($ul);
}
export default inicioApp;