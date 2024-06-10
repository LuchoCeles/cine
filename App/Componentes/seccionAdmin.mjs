import { CrearBoton,CrearInput } from "./funciones.mjs";
import {postFile} from "../../services/Elements/CarteleraElements.mjs"
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
    $divMain.className = "divmain-admin";

    let $inputTitulo = CrearInput("input-admin","Titulo");

    let $inputDes = CrearInput("input-admin","Descripcion");

    let $inputGenero = CrearInput("input-admin","Genero");
    
    let $inputDirec = CrearInput("input-admin","Director");
    
    let $inputActores = CrearInput("input-admin","Actores");

    let $inputFile = document.createElement("input");
    $inputFile.type = "file";

    let $btn = CrearBoton("button", "ENVIAR");
    $btn.type = "submit";

    $btn.addEventListener('click',()=>{
        postFile({titulo:$inputTitulo.value,
            descripcion:$inputDes.value,
            genero:$inputGenero.value,
            director:$inputDirec.value,
            actores:$inputActores.value,
            file:$inputFile.files[0]
        });
    });


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


