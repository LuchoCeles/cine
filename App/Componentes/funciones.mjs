import { getCartelera } from "../../services/Elements/CarteleraElements.mjs";

export const CrearImg = (nombreclase, src) => {
    let $img = document.createElement("img");
    $img.classList.add(nombreclase);
    $img.setAttribute("src", src);
    return $img
}

export const CrearDiv = (cont) => {
    let $contenido = document.createElement("div");
    $contenido.textContent = cont;
    return $contenido;
}

export const CrearA = (id, href, text) => {
    let $a = document.createElement("a");
    $a.setAttribute("id", id);
    $a.href = href;
    $a.text = text;
    return $a;
}

export const CrearUl = (a) => {
    let $ul = document.createElement("ul");
    let $li = document.createElement("li");
    $li.appendChild(a);
    $ul.appendChild($li);
    return $ul;
}

export const CrearP = (texto, className = "texto-descripcion-pelicula") => {
    let $p = document.createElement("p");
    $p.textContent = texto;
    $p.classList.add(className);
    return $p;
}



export const CrearBoton = (NameClass, Content) => {
    let $btn = document.createElement("button");
    $btn.classList.add(NameClass);
    $btn.textContent = Content;
    return $btn;
}

export const loadElements = async ($contenedor,  mostrarDetalles = true) => {
    let rsp = await getCartelera();

    if (rsp?.error === false) {
        rsp.data.forEach(element => {
            let $div = document.createElement("div");
            let $li = document.createElement("li");
            $div.classList.add("DescripcionImg");
            $li.classList.add("li-texto");
            
            $div.appendChild(CrearP(element.titulo, "Titulo-Pelicula"));
            if(mostrarDetalles){
                $div.appendChild(CrearP(element.descripcion));
                $div.appendChild(CrearP(element.genero));
                $div.appendChild(CrearP(element.director));
                $div.appendChild(CrearP(element.actores));
            }
            
            $li.appendChild(CrearImg("img_Poster", element.url));
            $li.appendChild($div);
            $contenedor.appendChild($li);
        });
    }
}