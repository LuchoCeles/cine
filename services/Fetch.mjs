const backendurl = "http://localhost:8080/";
export async function Get (url, dataObject){ // url seria el llamado al Get en especifico
    const objString = '?' + new URLSearchParams(dataObject).toString(); //Tansforma el objeto a un metodo querystring
    return await fetch( backendurl + url + objString,{
        method:'GET',
        mode:'cors'
    })
    .then((res)=> res.json())
    .then((res)=>res);
}

export async function Patch (url){ 
    return await fetch( backendurl + url, {
        method:'PATCH',
        mode:'cors'
    })
    .then((res)=> res.json())
    .then((res)=>res);
}

export async function PostU (url,cartelera){ 
    let data = new FormData();
    data.append('descripcion', cartelera.descripcion);
    data.append('titulo', cartelera.titulo);
    data.append('actores', cartelera.actores);
    data.append('genero', cartelera.genero);
    data.append('director', cartelera.director);
    data.append('File', cartelera.file);
    data.append('url', "");
    return await fetch( backendurl + url, {
        method:'POST',
        mode:'cors',
        body:data
    })
    .then((res)=> res.json())
    .then((res)=>res);
}

export async function Delete (url, dataObject){
    const objString = '?' + new URLSearchParams(dataObject).toString(); 
    return await fetch( backendurl + url + objString,{
        method:'DELETE',
        mode:'cors'
    })
    .then((res)=> res.json())
    .then((res)=>res);
}