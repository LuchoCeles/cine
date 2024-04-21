import navApp from "./componentes/nav.mjs";
import inicioApp from "./componentes/seccionInicio.mjs";
import combosApp from "./componentes/seccionCombos.mjs";
import carteleraApp from "./componentes/seccionCartelera.mjs";
import CargarInicioApp from "./componentes/cargaInicio.mjs";

const appFunc = () => {
    CargarInicioApp();
    navApp();
    inicioApp();
    combosApp();
    carteleraApp();
}
export default appFunc;