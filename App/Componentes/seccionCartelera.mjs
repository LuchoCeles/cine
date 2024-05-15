import { CrearDiv,loadElements } from "./funciones.mjs";
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

    let $divMain = document.createElement("div");
    let $divCarteleraEncabezado = CrearDiv("CARTELERA");
    $divCarteleraEncabezado.classList.add("SubTitulo");

    $divMain.appendChild($divCarteleraEncabezado);

    let $divPoster = document.createElement("div");
    $divPoster.classList.add("ContenidoPoster");

    $divMain.appendChild($divPoster);
    $secCartelera.appendChild($divMain);

    let $ul = document.createElement("ul");
    $ul.setAttribute("id", "GaleriaPosterCartelera");

    loadElements($ul);

    /*
        {
        "titulo": "Godzilla y Kong: El nuevo imperio",
        "descripcion":  "¡La batalla épica continúa! La película de Legendary Pictures continúa el explosivo enfrentamiento de “Godzilla vs. Kong” con una aventura completamente nueva que enfrenta al todopoderoso Kong y al temible Godzilla contra una colosal amenaza no descubierta escondida dentro de nuestro mundo, desafiando su propia existencia y la nuestra. “Godzilla y Kong: El nuevo imperio” profundiza en las historias de estos Titanes y sus orígenes, así como en los misterios de la Isla Calavera y más allá, mientras descubre la batalla mítica que ayudó a forjar a estos seres extraordinarios y los unió a la humanidad para siempre",
        "genero": "Genero: Accion",
        "director": "Direccion: Adam Wingard",
        "actores": "Actores: Rebecca Hall, Brian Tyree Henry",
        "url": "./img_peliculas/img_2/kong_2.jpg"
        }
    */
    /*
        {
        "titulo": "Un gato con suerte",
        "descripcion":  "Beckett es un gato mimado y egoísta que da por sentada la suerte que ha tenido. Sin embargo, todo eso está a punto de cambiar cuando, por descuido, pierde su novena vida. Sin vidas restantes y enfrentado a lo inevitable, Beckett suplica que las cosas vuelvan a ser como antes. Al principio su petición es rechazada, pero en un momento de empatía excepcional, el 'Guardián' cambia de opinión y le permite regresar a la Tierra con una vida completamente nueva. Sin embargo, lo que no se da cuenta de inmediato es que cada una de estas nuevas vidas lo verá regresar en una variedad de formas diferentes... Beckett pasará de ser una mascota gloriosamente ensimismada a un héroe abnegado; cada una de sus nuevas formas le enseñará una lección valiosa para encontrar la mejor versión de ti mismo.",
        "genero": "Genero: Infantil",
        "director": "Direccion: Chris Jenkins",
        "actores": "Actores: Mo Gilligan, Simone Ashley",
        "url": "./img_peliculas/img_2/michi_2.jpg"
        }
    */
    /*
        {
        "titulo": "Kung Fu Panda 4",
        "descripcion":  "Después de tres aventuras desafiando a la muerte y derrotando a villanos de clase mundial con su incomparable coraje y sus alocadas habilidades en las artes marciales, Po, el Guerrero Dragón, es llamado por el destino para tomarse un descanso. Específicamente, se le pide que se convierta en el líder espiritual del Valle de la Paz. Esto plantea un par de problemas obvios. En primer lugar, Po sabe tanto de liderazgo espiritual como de dieta paleo, y en segundo lugar, necesita encontrar y entrenar rápidamente a un nuevo Guerrero Dragón antes de poder asumir su nuevo y elevado cargo.",       
        "genero": "Genero: Infantil, Accion",
        "director": "Direccion: Mike Mitchell",
        "actores": "Actores: Jack Black, Awkwafina",
        "url": "./img_peliculas/img_2/panda_2.jpg"
        }
    */

    $divPoster.appendChild($ul);
};

export default carteleraApp;
