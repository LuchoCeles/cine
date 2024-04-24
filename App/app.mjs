import CargarInicioApp from "./componentes/cargaInicio.mjs";
import navApp from "./componentes/nav.mjs";
import inicioApp from "./componentes/seccionInicio.mjs";
import combosApp from "./componentes/seccionCombos.mjs";
import carteleraApp from "./componentes/seccionCartelera.mjs";
import carruselApp from "./componentes/seccionCarrusel.mjs";

const appFunc = () => {
    CargarInicioApp();
    navApp();
    carruselApp();
    inicioApp();
    combosApp();
    carteleraApp();
}
export default appFunc;