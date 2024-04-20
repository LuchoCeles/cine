import navApp from "./componentes/nav.mjs";
import inicioApp from "./componentes/seccionInicio.mjs";
import combosApp from "./componentes/seccionCombos.mjs";
import cateleraApp from "./componentes/seccionCartelera.mjs";

const appFunc = () => {
    navApp();
    inicioApp();
    combosApp();
    cateleraApp();
}
export default appFunc;