const CargarInicioApp = () => {
    const $body = document.body;

    let $secCar = document.createElement("section");
    $secCar.setAttribute("id", "sec-cartelera");
    let $secIni = document.createElement("section");
    $secIni.setAttribute("id", "sec-inicio");
    let $secCom = document.createElement("section");
    $secCom.setAttribute("id", "sec-combo");
    let $secCarrusel = document.createElement("section");
    $secCarrusel.setAttribute("id", "sec-carrusel");
    let $secAdmin = document.createElement("section");
    $secAdmin.setAttribute("id", "sec-admin");
    $secAdmin.style.display= "none";

    $body.appendChild($secCar);
    $body.appendChild($secIni);
    $body.appendChild($secCom);
    $body.appendChild($secCarrusel);
    $body.appendChild($secAdmin);

}
export default CargarInicioApp;