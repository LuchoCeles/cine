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
}
export default inicioApp;