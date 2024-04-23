import { CrearImg } from "./funciones.mjs";
const combosApp = () => {
    const $combos = document.getElementById("id-combos");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");

    $combos.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "block";
    });

    let $divContenido = document.createElement("div");
    let $divImg = document.createElement("div");
    $divImg.classList.add("contenedorImagenCartelera");

    $divContenido.classList.add("page");
    $secCombo.appendChild($divContenido);
    $divContenido.appendChild($divImg);

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
    const $imagenes = [ // No andan ni idea
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

    let $divCombos = document.createElement("div");
    let $hCombo = document.createElement("h2");
    $hCombo.textContent = "Combos";

    $divCombos.appendChild($hCombo);
    $divContenido.appendChild($divCombos);

    let $divCombosC = document.createElement("div");
    $divContenido.appendChild($divCombosC);

    const CrearDivImg = (nombreClass, rutaImg, contenidoText) => {
        let $divComb = document.createElement("div");
        let $imgComb = CrearImg(nombreClass, rutaImg);
        let $divtitle = document.createElement("div");
        let $bComb = document.createElement("b");
        $bComb.textContent = contenidoText;
        $divtitle.appendChild($bComb);
        $divComb.appendChild($divtitle);
        $divComb.appendChild($imgComb);
        return $divComb;
    }

    $divCombosC.appendChild(CrearDivImg("combo1", "./img_combos/combo1.jpg", "Combo 1"));
    $divCombosC.appendChild(CrearDivImg("combo2", "./img_combos/combo2.jpg", "Combo 2"));
    $divCombosC.appendChild(CrearDivImg("combo3", "./img_combos/combo3.jpg", "Combo 3"));
    $divCombosC.appendChild(CrearDivImg("combo4", "./img_combos/combo4.jpg", "Combo 4"));
    $divCombosC.appendChild(CrearDivImg("combo5", "./img_combos/combo5.jpg", "Combo 5"));
    $divCombosC.appendChild(CrearDivImg("combo6", "./img_combos/combo6.jpg", "Combo 6"));
    $divCombosC.appendChild(CrearDivImg("combo7", "./img_combos/combo7.jpg", "Combo 7"));
    $divCombosC.appendChild(CrearDivImg("combo8", "./img_combos/combo8.jpg", "Combo 8"));
    $divCombosC.appendChild(CrearDivImg("combo9", "./img_combos/combo9.jpg", "Combo 9"));

}
export default combosApp;