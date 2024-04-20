const combosApp = () => {
    const $combos = document.getElementById("id-combos");
    const $secInicio = document.getElementById("sec-inicio");
    const $secCartelera = document.getElementById("sec-cartelera");
    const $secCombo = document.getElementById("sec-combo");
    
    $combos.addEventListener("click", () => {
        $secInicio.style.display = "none";
        $secCartelera.style.display = "none";
        $secCombo.style.display = "block";
    });
}
export default combosApp;