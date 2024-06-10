import { CrearA, CrearUl, CrearImg } from "./funciones.mjs";
const navApp = () => {
    const $nav = document.getElementById("nav-main");

    $nav.appendChild(CrearImg("LogoNav", "./logo/CM.png"));
    $nav.appendChild(CrearUl(CrearA("id-inicio", "#inicio", "INICIO")));
    $nav.appendChild(CrearUl(CrearA("id-cartelera", "#cartelera", "CARTELERA")));
    $nav.appendChild(CrearUl(CrearA("id-combos", "#combos", "COMBOS")));
    $nav.appendChild(CrearUl(CrearA("id-admin", "#admin", "ADMIN")));

}
export default navApp;