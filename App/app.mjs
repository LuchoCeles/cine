import navApp from "./componentes/nav.mjs";
import inicioApp from "./componentes/seccionInicio.mjs";
import combosApp from "./componentes/seccionCombos.mjs";
import cateleraApp from "./componentes/seccionCartelera.mjs";
navApp();
inicioApp();
combosApp();
cateleraApp();

const appFunc = () => {
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");

    let $a = document.createElement("a");
    $a.classList.add("page");
    $secCartelera.appendChild($a);

    let $btnA = document.createElement("button");
    let $btnS = document.createElement("button");
    $btnA.addEventListener("click", () => {
        Carrusel(siguienteImagen());
    });
    $btnS.addEventListener("click", () => {
        Carrusel(imagenAnterior());
    });
    $a.appendChild($btnA);
    $a.appendChild($btnS);

    let $imgId1 = document.createElement("img");
    $imgId1.setAttribute("id", "id-img-1");
    $imgId1.setAttribute("src", "./img_peliculas/img_1/kong_1.jpg");
    $a.appendChild($imgId1);
    let $imgId2 = document.createElement("img");
    $imgId2.setAttribute("id", "id-img-2");
    $imgId2.setAttribute("src", "./img_peliculas/img_1/michi_1.jpg");
    $a.appendChild($imgId2);
    let $imgId3 = document.createElement("img");
    $imgId3.setAttribute("id", "id-img-2");
    $imgId3.setAttribute("src", "./img_peliculas/img_1/panda_1.jpg");
    $a.appendChild($imgId3);

    ///////////////////////////////CARRUSEL/////////////////////////////
    const $imagenes = document.querySelectorAll(".img");
    const mostrarImagen = (i) => {
        for (var i = 0; i < $imagenes.length; i++) { //bucle para ocultar imagenes
            $imagenes[i].style.display = 'none';
        }
        $imagenes[i].style.display = 'block';
    }
    const siguienteImagen = (i) => {
        i = (i + 1) % $imagenes.length;
        mostrarImagen(i);
    }
    const imagenAnterior = (i) => {
        i = (i - 1 + $imagenes.length) % $imagenes.length;
        mostrarImagen(i);
    }
    const Carrusel = (a) => {
        let i = 0;
        mostrarImagen(i);
        setInterval(a, 3000);
    }
    ////////////////////////////////////////////////////////////
}
appFunc();
export default app;