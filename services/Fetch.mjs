const backendurl = "http://localhost:8080/";
export async function Get (url, dataObject){
    const objString ='?' + new URLSearchParams(dataObject).toString();
    return await fetch( backendurl + url + objString,{
        method:'GET',
        mode:'cors'
    })
    .then((res)=> res.json())
    .then((res)=>res);
}