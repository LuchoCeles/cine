const app = () => {

    const $nav = document.getElementById("nav-main");
    const $secCartelera = document.getElementById("sec-cartelera");

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
        $inicio.style.display = "block";
        $cartelera.style.display = "none";
        $combos.style.display = "none";
    }
    const Cartelera = () => {
        $inicio.style.display = "none";
        $cartelera.style.display = "block";
        $combos.style.display = "none";
    }
    const Combos = () => {
        $inicio.style.display = "none";
        $cartelera.style.display = "none";
        $combos.style.display = "block";
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

    ///////////////////////////////CARRUSEL/////////////////////////////
    let $a = document.createElement("a");
    $a.classList.add("page");
    $secCartelera.appendChild(a);
    const $imagenes = document.querySelectorAll(".page");
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

    let $btnA = document.createElement("button");
    let $btnS = document.createElement("button");
    $btnA.addEventListener("click", () => {
        Carrusel(siguienteImagen());
    });
    $btnS.addEventListener("click", () => {
        Carrusel(imagenAnterior());
    });

    const $imgId1 = document.getElementById("id-img-1");
    $imgId1.setAttribute("id", "id-img-1");
    $imgId1.setAttribute("src", "./img_peliculas/img_1");
    $a.appendChild($imgId1);
    
}

export default app;