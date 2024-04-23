import { CrearImg } from "./funciones.mjs";
import { Carrusel } from "./cargaInicio.mjs";
const combosApp = () => {
    const $combos = document.getElementById("id-combos");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");
    const $divMain = document.getElementById("page-com");

    $combos.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "block";
    });

    Carrusel();

    let $divCombos = document.createElement("div");
    let $hCombo = document.createElement("h2");
    $hCombo.textContent = "Combos";

    $divCombos.appendChild($hCombo);
    $divMain.appendChild($divCombos);

    let $divCombosC = document.createElement("div");
    $divMain.appendChild($divCombosC);

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