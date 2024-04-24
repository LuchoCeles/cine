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
export const CrearBoton = (NameClass, Content) => {
    let $btn = document.createElement("button");
    $btn.classList.add(NameClass);
    $btn.textContent = Content;
    return $btn;
}