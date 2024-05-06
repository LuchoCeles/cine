import { Get } from "../Fetch.mjs";
const url = "CarteleraController/Get"
export async function getCarteleraElements() {
    let rsp = await Get(url + 'get');
    return rsp;
} 