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

    let $divMain = document.createElement("div");
    let $divImg = document.createElement("div");
    $divImg.classList.add("contenedorImagenCartelera");

    $divMain.classList.add("page");
    $secCartelera.appendChild($divMain);
    $secCartelera.appendChild($divImg);

    let $btnA = document.createElement("button");
    let $btnS = document.createElement("button");
    $btnA.classList.add("btnA");
    $btnS.classList.add("btnS");
    $btnA.textContent = "<";
    $btnS.textContent = ">";
    $divImg.appendChild($btnA);
    $divImg.appendChild($btnS);

    let $img = document.createElement("img");
    $img.classList.add("carousel-image");
    $img.setAttribute("src", "./img_peliculas/img_1/kong_1.jpg");
    $divImg.appendChild($img);

    let i = 0;
    const $imagenes = [
        "./img_peliculas/img_1/kong_1.jpg",
        "./img_peliculas/img_1/michi_1.jpg",
        "./img_peliculas/img_1/panda_1.jpg"
    ];

    const $image = document.querySelector(".carousel-image");
    const mostrarImagen = (index) => {
        $image.src = $imagenes[index];
    };

    const siguienteImagen = () => {
        i = (i + 1) % $imagenes.length;
        mostrarImagen(i);
    };

    const imagenAnterior = () => {
        i = (i - 1 + $imagenes.length) % $imagenes.length;
        mostrarImagen(i);
    };

    $btnA.addEventListener("click", () => {
        siguienteImagen();
    });
    $btnS.addEventListener("click", () => {
        imagenAnterior();
    });

    setInterval(siguienteImagen, 3000);
};

export default carteleraApp;
