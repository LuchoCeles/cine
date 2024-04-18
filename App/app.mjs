const app = () => {

    const $nav = document.getElementById("nav-main");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");

    const CrearA = (id, href, text) => {
        let $a = document.createElement("a");
        $a.setAttribute("id", id);
        $a.href = href;
        $a.text = text;
        return $a;
    }

    const CrearList = (a) => {
        let $ul = document.createElement("ul");
        let $li = document.createElement("li");
        $li.appendChild(a);
        $ul.appendChild($li);
        return $ul;
    }

    $nav.appendChild(CrearList(CrearA("id-inicio", "#inicio", "INICIO")));
    $nav.appendChild(CrearList(CrearA("id-cartelera", "#cartelera", "CARTELERA")));
    $nav.appendChild(CrearList(CrearA("id-combos", "#combos", "COMBOS")));

    const $inicio = document.getElementById("id-inicio");
    const $cartelera = document.getElementById("id-cartelera");
    const $combos = document.getElementById("id-combos");

    const Inicio = () => {
        $secInicio.style.display = "block";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "none";
    }
    const Cartelera = () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "block";
        $secCombo.style.display = "none";
    }
    const Combos = () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "block";
    }

    $inicio.addEventListener("click", () => {
        Inicio();
    });
    $cartelera.addEventListener("click", () => {
        Cartelera();
    });
    $combos.addEventListener("click", () => {
        Combos();
    });

    ////////////////////////////////////////////////////////////

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

export default app;