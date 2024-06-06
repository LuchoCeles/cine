const backendurl = "http://localhost:8080/";
export async function Get (url, dataObject){ // url seria el llamado al Get en especifico
    const objString = '?' + new URLSearchParams(dataObject).toString(); //Tansforma el objeto a un metodo querystring
    return await fetch( backendurl + url + objString,{
        method:'GET',
        mode:'cors',
        /*headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }*/
    })
    .then((res)=> res.json())
    .then((res)=>res);
}

export async function Patch (url){ 
    return await fetch( backendurl + url, {
        method:'PATCH',
        mode:'cors',
        /*headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }*/
    })
    .then((res)=> res.json())
    .then((res)=>res);
}
export async function PostU (url,file){ 
    let data = new FormData();
    data.append('file',file);
    return await fetch( backendurl + url, {
        method:'Post',
        mode:'cors',
        /*headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }*/
        body:data
    })
    .then((res)=> res.json())
    .then((res)=>res);
}
export async function Delete (url, dataObject){
    const objString = '?' + new URLSearchParams(dataObject).toString(); 
    return await fetch( backendurl + url + objString,{
        method:'DELETE',
        mode:'cors',
        /*headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }*/
    })
    .then((res)=> res.json())
    .then((res)=>res);
}