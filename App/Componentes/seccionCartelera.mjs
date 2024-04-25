import { CrearImg, CrearDiv } from "./funciones.mjs";
const carteleraApp = () => {
    const $cartelera = document.getElementById("id-cartelera");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");

    $cartelera.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "block";
        $secCombo.style.display = "none";
    });

    $secCartelera.style.display = "none";

    let $divPoster = document.createElement("div");
    $secCartelera.appendChild($divPoster);

    $divPoster.classList.add("ContenidoPoster");
    let $divCarteleraEncabezado = CrearDiv("CARTELERA");
    $divCarteleraEncabezado.classList.add("SubTitulo");
    $divPoster.appendChild($divCarteleraEncabezado);

    let $li1 = document.createElement("li");
    let $li2 = document.createElement("li");
    let $li3 = document.createElement("li");

    $li1.classList.add("li-texto");
    $li2.classList.add("li-texto");
    $li3.classList.add("li-texto");
    
    $li1.appendChild(CrearImg("img_Poster", "./img_peliculas/img_2/kong_2.jpg"));
    $li2.appendChild(CrearImg("img_Poster", "./img_peliculas/img_2/michi_2.jpg"));
    $li3.appendChild(CrearImg("img_Poster", "./img_peliculas/img_2/panda_2.jpg"));

    let $div1 = document.createElement("div");
    let $div2 = document.createElement("div");
    let $div3 = document.createElement("div");

    $div1.classList.add("DescripcionImg");
    $div2.classList.add("DescripcionImg");
    $div3.classList.add("DescripcionImg");

    let $p1 = document.createElement("p");
    let $p2 = document.createElement("p");
    let $p3 = document.createElement("p");

    $p2.textContent = "A una banda de delincuentes se les ha encargado secuestrar a Abigail, una bailarina de doce años hija de una poderosa figura del inframundo. Su misión requiere también vigilarla durante la noche para poder cobrar un rescate de 50 millones de dólares. En una mansión aislada, los captores comienzan a desaparecer, uno por uno, y descubren, para su...";
    $p1.textContent = "¡La batalla épica continúa! La película de Legendary Pictures continúa el explosivo enfrentamiento de “Godzilla vs. Kong” con una aventura completamente nueva que enfrenta al todopoderoso Kong y al temible Godzilla contra una colosal amenaza no descubierta escondida dentro de nuestro mundo, desafiando su propia existencia y la nuestra. “Godzilla y...";
    $p3.textContent = "Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en las artes marciales, Po, el Guerrero Dragón, es llamado por el destino para tomarse un descanso. Específicamente, se le pide que se convierta en el líder espiritual del Valle de la Paz. Esto plantea un...";

    $div1.appendChild($p1);
    $div2.appendChild($p2);
    $div3.appendChild($p3);

    $li1.appendChild($div1);
    $li2.appendChild($div2);
    $li3.appendChild($div3);


    let $ul = document.createElement("ul");
    $ul.setAttribute("id", "GaleriaPosterCartelera");
    $ul.appendChild($li1);
    $ul.appendChild($li2);
    $ul.appendChild($li3);
    $divPoster.appendChild($ul);
};

export default carteleraApp;
