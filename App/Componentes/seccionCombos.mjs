import { CrearImg,CrearDiv } from "./funciones.mjs";
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
    
   let $divContido = document.createElement("div");
   let $divImg = document.createElement("div");
   $divImg.classList.add("contenedorImagenCombos"); 

   $divContido.classList.add("page");
   $secCombo.appendChild($divContido);
   $divContido.appendChild($divImg);

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

    let $divCombos = document.createElement("div");
    let $hCombo = document.createElement("h2");
    $hCombo.textContent = "Combos";

    $divCombos.appendChild($hCombo);
    $divContido.appendChild($divCombos);

    let $divCombosC= document.createElement("div");
    let $divComb1 = document.createElement("div");
    let $imgComb1 = CrearImg("combo1","./img_combos/combo1.jpg");
    let $divtitle1 = document.createElement("div");
    let $bComb1 = document.createElement("b");
    $bComb1.textContent = "Combo 1"
    $divComb1.appendChild($bComb1);
    $divComb1.appendChild($divtitle1);
    $divComb1.appendChild($imgComb1);
    $divCombosC.appendChild($divComb1);
    $divContido.appendChild($divCombosC);


}
export default combosApp;