import { CrearImg, CrearDiv, CrearBoton, loadElements } from "./funciones.mjs";
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

    $secInicio.style.color = "white";

    let $divMain = document.createElement("div");
    let $divCarteleraEncabezado = CrearDiv("EN CARTELERA");
    $divCarteleraEncabezado.classList.add("SubTitulo");

    $divMain.appendChild($divCarteleraEncabezado);

    let $divPoster = document.createElement("div");
    $divPoster.classList.add("ContenidoPoster");

    let $ul = document.createElement("ul");
    $ul.setAttribute("id", "GaleriaPoster");

    loadElements($ul,false);

    $divPoster.appendChild($ul);
    $secInicio.appendChild($divPoster);

    const $divCombos = document.createElement("div");
    $divCombos.classList.add("ContenidoCombos");

    $secInicio.appendChild($divCombos);

    $divCombos.appendChild(CrearImg("carousel-imagen-combo", "./img_combos/combo1.jpg"));

    let $btnA1 = CrearBoton("btnA1", "<");
    let $btnS1 = CrearBoton("btnS1", ">");

    $divCombos.appendChild($btnA1);
    $divCombos.appendChild($btnS1);

    $btnA1.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS1.addEventListener("click", () => {
        imagenAnterior();
    });

    let i = 0;
    const $imagenescombos = [
        "./img_combos/combo1.jpg",
        "./img_combos/combo2.jpg",
        "./img_combos/combo3.jpg",
        "./img_combos/combo4.jpg",
        "./img_combos/combo5.jpg",
        "./img_combos/combo6.jpg",
        "./img_combos/combo7.jpg",
        "./img_combos/combo8.jpg",
        "./img_combos/combo9.jpg"
    ];

    const $image = document.querySelector(".carousel-imagen-combo");
    const mostrarImagen = (index) => {
        $image.src = $imagenescombos[index];
    };

    const siguienteImagen = () => {
        i = (i + 1) % $imagenescombos.length;
        mostrarImagen(i);
    };

    const imagenAnterior = () => {
        i = (i - 1 + $imagenescombos.length) % $imagenescombos.length;
        mostrarImagen(i);
    };

    setInterval(siguienteImagen, 3000);

}
export default inicioApp;