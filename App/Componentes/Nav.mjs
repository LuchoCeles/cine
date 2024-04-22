import { CrearA,CrearUl } from "./funciones.mjs";
const navApp = () => {
    const $nav = document.getElementById("nav-main");
    
    $nav.appendChild(CrearUl(CrearA("id-inicio", "#inicio", "INICIO")));
    $nav.appendChild(CrearUl(CrearA("id-cartelera", "#cartelera", "CARTELERA")));
    $nav.appendChild(CrearUl(CrearA("id-combos", "#combos", "COMBOS")));
    
}
export default navApp;