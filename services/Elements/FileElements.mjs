import {Post } from "../Fetch.mjs";
const url = "FileController/"

export async function postFile(img){
    await Post(url,img);
}