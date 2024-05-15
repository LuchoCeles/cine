import { Get } from "../Fetch.mjs";
const url = "CarteleraController/"
export async function getCartelera() {
    let rsp = await Get(url + 'get');
    return rsp;
}