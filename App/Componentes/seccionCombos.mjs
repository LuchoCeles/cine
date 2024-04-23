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

/* SE PUEDE OPTIMIZAR, PERO NO SE COMO, APENAS SE ME OCURRIO COMO HACER ESTA CEBOLLA*/

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

    let $divComb2 = document.createElement("div");
    let $imgComb2 = CrearImg("combo2","./img_combos/combo2.jpg");
    let $divtitle2 = document.createElement("div");
    let $bComb2 = document.createElement("b");
    $bComb2.textContent = "Combo 2"
    $divComb2.appendChild($bComb2);
    $divComb2.appendChild($divtitle2);
    $divComb2.appendChild($imgComb2);
    $divCombosC.appendChild($divComb2);
    

    let $divComb3 = document.createElement("div");
    let $imgComb3 = CrearImg("combo3","./img_combos/combo3.jpg");
    let $divtitle3 = document.createElement("div");
    let $bComb3 = document.createElement("b");
    $bComb3.textContent = "Combo 3"
    $divComb3.appendChild($bComb3);
    $divComb3.appendChild($divtitle3);
    $divComb3.appendChild($imgComb3);
    $divCombosC.appendChild($divComb3);
   

    let $divComb4 = document.createElement("div");
    let $imgComb4 = CrearImg("combo4","./img_combos/combo4.jpg");
    let $divtitle4 = document.createElement("div");
    let $bComb4 = document.createElement("b");
    $bComb4.textContent = "Combo 4"
    $divComb4.appendChild($bComb4);
    $divComb4.appendChild($divtitle4);
    $divComb4.appendChild($imgComb4);
    $divCombosC.appendChild($divComb4);
    
    
    
    let $divComb5 = document.createElement("div");
    let $imgComb5 = CrearImg("combo5","./img_combos/combo5.jpg");
    let $divtitle5 = document.createElement("div");
    let $bComb5 = document.createElement("b");
    $bComb5.textContent = "Combo 5"
    $divComb5.appendChild($bComb5);
    $divComb5.appendChild($divtitle5);
    $divComb5.appendChild($imgComb5);
    $divCombosC.appendChild($divComb5);
   

    let $divComb6 = document.createElement("div");
    let $imgComb6 = CrearImg("combo6","./img_combos/combo6.jpg");
    let $divtitle6 = document.createElement("div");
    let $bComb6 = document.createElement("b");
    $bComb6.textContent = "Combo 6"
    $divComb6.appendChild($bComb6);
    $divComb6.appendChild($divtitle6);
    $divComb6.appendChild($imgComb6);
    $divCombosC.appendChild($divComb6);
   

    let $divComb7 = document.createElement("div");
    let $imgComb7 = CrearImg("combo7","./img_combos/combo7.jpg");
    let $divtitle7 = document.createElement("div");
    let $bComb7 = document.createElement("b");
    $bComb7.textContent = "Combo 7"
    $divComb7.appendChild($bComb7);
    $divComb7.appendChild($divtitle7);
    $divComb7.appendChild($imgComb7);
    $divCombosC.appendChild($divComb7);
  

    let $divComb8 = document.createElement("div");
    let $imgComb8 = CrearImg("combo8","./img_combos/combo8.jpg");
    let $divtitle8 = document.createElement("div");
    let $bComb8 = document.createElement("b");
    $bComb8.textContent = "Combo 8"
    $divComb8.appendChild($bComb8);
    $divComb8.appendChild($divtitle8);
    $divComb8.appendChild($imgComb8);
    $divCombosC.appendChild($divComb8);


    let $divComb9 = document.createElement("div");
    let $imgComb9 = CrearImg("combo9","./img_combos/combo9.jpg");
    let $divtitle9 = document.createElement("div");
    let $bComb9 = document.createElement("b");
    $bComb9.textContent = "Combo 9"
    $divComb9.appendChild($bComb9);
    $divComb9.appendChild($divtitle9);
    $divComb9.appendChild($imgComb9);
    $divCombosC.appendChild($divComb9);
    
    $divContido.appendChild($divCombosC);
}
export default combosApp;