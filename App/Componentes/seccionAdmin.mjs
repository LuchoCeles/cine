import { CrearBoton } from "./funciones.mjs";
const adminApp = () => {
    const $admin = document.getElementById("id-admin");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");
    const $secAdmin = document.getElementById("sec-admin");
    const $secCarrusel = document.getElementById("sec-carrusel");

    $admin.addEventListener("click", () => {
        $secCarrusel.style.display = "none";
        $secInicio.style.display = "none";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "none";
        $secAdmin.style.display = "block";
    });

    let $divMain = document.createElement("div");

    let $inputTitulo = document.createElement("input");
    $inputTitulo.type = "text";
    let $inputDes = document.createElement("input");
    $inputDes.type = "text";
    let $inputGenero = document.createElement("input");
    $inputGenero.type = "text";
    let $inputDirec = document.createElement("input");
    $inputDirec.type = "text";
    let $inputActores = document.createElement("input");
    $inputActores.type = "text";
    let $inputFile = document.createElement("input");
    $inputFile.type = "file";
    let $btn = CrearBoton("button", "ENVIAR");
    $btn.type = "submit";

    $divMain.append($inputTitulo);
    $divMain.append($inputDes);
    $divMain.append($inputGenero);
    $divMain.append($inputDirec);
    $divMain.append($inputActores);
    $divMain.append($inputFile);
    $divMain.append($btn);

    $secAdmin.append($divMain);
}

export default adminApp;


