const CargarInicioApp = () => {
    const $body = document.body;

    let secCar = document.createElement("section");
    secCar.setAttribute("id", "sec-cartelera");
    let secIni = document.createElement("section");
    secIni.setAttribute("id", "sec-inicio");
    let secCom = document.createElement("section");
    secCom.setAttribute("id", "sec-combo");
    let secCarrusel = document.createElement("section");
    secCarrusel.setAttribute("id", "sec-carrusel");

    $body.appendChild(secCarrusel);
    $body.appendChild(secCar);
    $body.appendChild(secIni);
    $body.appendChild(secCom);

}
export default CargarInicioApp;