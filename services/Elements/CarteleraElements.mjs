import { Get,PostU } from "../Fetch.mjs";
const url = "CarteleraController/"
export async function getCartelera() {
    let rsp = await Get(url + 'get');
    return rsp;
}
export async function postFile(cartelera){
    await PostU(url+"PostU",cartelera);
}