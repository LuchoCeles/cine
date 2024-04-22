export const CrearImg = (nombreclase, src) => {
    let $img = document.createElement("img");
    $img.classList.add(nombreclase);
    $img.setAttribute("src", src);
    return $img
}

export const CrearLi = () => {
    $li = document.createElement("li");
    return $li;
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