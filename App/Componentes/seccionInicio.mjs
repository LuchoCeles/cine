import { CrearImg, CrearDiv ,CrearBoton} from "./funciones.mjs";
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

    $secInicio.style.color="white";

    let $divMain = document.createElement("div");
    let $divCarteleraEncabezado = CrearDiv("EN CARTELERA");
    $divCarteleraEncabezado.classList.add("SubTitulo");
        
    $divMain.appendChild($divCarteleraEncabezado);

    let $divPoster = document.createElement("div");
    $divPoster.classList.add("ContenidoPoster");
    
    $divMain.appendChild($divPoster);
    $secInicio.appendChild($divMain);

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

    const $divCombos = document.createElement("div");
    $divCombos.classList.add("ContenidoCombos");
    
    $secInicio.appendChild($divCombos);

    $divCombos.appendChild(CrearImg("carousel-imagen-combo", "./img_combos/combo1.jpg"));

    let $btnA1 = CrearBoton("btnA1","<");
    let $btnS1 = CrearBoton("btnS1",">");

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

    const $divBotones = document.createElement("div");
    $divBotones.classList.add("divBotonesCombos");

    $divCombos.appendChild($divBotones);

    let $btn1 = CrearBoton("btnCarruselCombos","1");
    let $btn2 = CrearBoton("btnCarruselCombos","2");
    let $btn3 = CrearBoton("btnCarruselCombos","3");
    let $btn4 = CrearBoton("btnCarruselCombos","4");
    let $btn5 = CrearBoton("btnCarruselCombos","5");
    let $btn6 = CrearBoton("btnCarruselCombos","6");
    let $btn7 = CrearBoton("btnCarruselCombos","7");
    let $btn8 = CrearBoton("btnCarruselCombos","8");
    let $btn9 = CrearBoton("btnCarruselCombos","9");

    $btn1.addEventListener("click",()=>{mostrarImagen(0)});
    $btn2.addEventListener("click",()=>{mostrarImagen(1)});
    $btn3.addEventListener("click",()=>{mostrarImagen(2)});
    $btn4.addEventListener("click",()=>{mostrarImagen(3)});
    $btn5.addEventListener("click",()=>{mostrarImagen(4)});
    $btn6.addEventListener("click",()=>{mostrarImagen(5)});
    $btn7.addEventListener("click",()=>{mostrarImagen(6)});
    $btn8.addEventListener("click",()=>{mostrarImagen(7)});
    $btn9.addEventListener("click",()=>{mostrarImagen(8)});


    $divBotones.appendChild($btn1);
    $divBotones.appendChild($btn2);
    $divBotones.appendChild($btn3);
    $divBotones.appendChild($btn4);
    $divBotones.appendChild($btn5);
    $divBotones.appendChild($btn6);
    $divBotones.appendChild($btn7);
    $divBotones.appendChild($btn8);
    $divBotones.appendChild($btn9);
    
}
export default inicioApp;