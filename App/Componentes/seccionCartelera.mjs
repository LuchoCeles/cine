const cateleraApp = () => {
    const $cartelera = document.getElementById("id-cartelera");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");
    const $imagenes = document.querySelectorAll(".img");

    $cartelera.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "block";
        $secCombo.style.display = "none";
    });

    let $divMain = document.createElement("div");
    let $aImg = document.createElement("a");
    $aImg.classList.add("contenedorImagen");
    $divMain.classList.add("page");
    $secCartelera.appendChild($divMain);
    $secCartelera.appendChild($aImg);

    let $btnA = document.createElement("button");
    let $btnS = document.createElement("button");

    $divMain.appendChild($btnA);
    $divMain.appendChild($btnS);

    let $img = document.createElement("img");
    $img.setAttribute("id", "id-img-1");
    $img.setAttribute("src", "./img_peliculas/img_1/kong_1.jpg");
    $aImg.appendChild($img);
    let $img1 = document.createElement("img");
    $img1.setAttribute("id", "id-img-2");
    $img1.setAttribute("src", "./img_peliculas/img_1/michi_1.jpg");
    $aImg.appendChild($img1);
    let $img2 = document.createElement("img");
    $img2.setAttribute("id", "id-img-3");
    $img2.setAttribute("src", "./img_peliculas/img_1/panda_1.jpg");
    $aImg.appendChild($img2);

    let i = 0;

    const mostrarImagen = (i) => {
        $imagenes.forEach(($img, index) => {
            if (index === i) {
                $img.style.display = "block";
            } else {
                $img.style.display = "none";
            }
        });
    };

    const siguienteImagen = () => {
        i = (i + 1) % $imagenes.length;
        mostrarImagen(i);
    };

    const imagenAnterior = () => {
        i = (i - 1 + $imagenes.length) % $imagenes.length;
        mostrarImagen(i);
    };

    const Carrusel = (fun) => {
        setInterval(fun, 3000);
        mostrarImagen(i);
    };

    $btnA.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS.addEventListener("click", () => {
        imagenAnterior();
    });

    Carrusel(siguienteImagen);
};

export default cateleraApp;
