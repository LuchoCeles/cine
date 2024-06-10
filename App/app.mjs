import CargarInicioApp from "./componentes/cargaInicio.mjs";
import navApp from "./componentes/nav.mjs";
import carruselApp from "./componentes/seccionCarrusel.mjs";
import inicioApp from "./componentes/seccionInicio.mjs";
import combosApp from "./componentes/seccionCombos.mjs";
import carteleraApp from "./componentes/seccionCartelera.mjs";
import adminApp from "./componentes/seccionAdmin.mjs";

const appFunc = () => {
    CargarInicioApp();
    navApp();
    carruselApp();
    inicioApp();
    combosApp();
    carteleraApp();
    adminApp();
}
export default appFunc;