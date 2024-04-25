import { CrearDiv, CrearImg } from "./funciones.mjs";
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

    $secCombo.style.display = "none";

    let $divContenido = document.createElement("div");
    $secCombo.appendChild($divContenido);

    let $divCombos = CrearDiv("Combos");
    $divCombos.classList.add("SubTitulo");

    $divContenido.appendChild($divCombos);

    let $divCombosC = document.createElement("div");
    $divContenido.appendChild($divCombosC);
    $divCombosC.classList.add("id-combos");

    const CrearDivImg = (nombreClass, rutaImg, contenidoText,idDiv) => {
        let $divComb = document.createElement("div");
        $divComb.setAttribute("class",idDiv);
        let $imgComb = CrearImg(nombreClass, rutaImg);
        let $divtitle = document.createElement("div");
        let $bComb = document.createElement("b");
        $bComb.textContent = contenidoText;
        $divtitle.appendChild($bComb);
        $divComb.appendChild($divtitle);
        $divComb.appendChild($imgComb);
        return $divComb;
    }

    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo1.jpg", "Combo 1","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo2.jpg", "Combo 2","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo3.jpg", "Combo 3","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo4.jpg", "Combo 4","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo5.jpg", "Combo 5","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo6.jpg", "Combo 6","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo7.jpg", "Combo 7","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo8.jpg", "Combo 8","divC"));
    $divCombosC.appendChild(CrearDivImg("comboImg", "./img_combos/combo9.jpg", "Combo 9","divC"));

}
export default combosApp;