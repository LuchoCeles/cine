const navApp = () => {
    const $nav = document.getElementById("nav-main");
    
    const CrearA = (id, href, text) => {
        let $a = document.createElement("a");
        $a.setAttribute("id", id);
        $a.href = href;
        $a.text = text;
        return $a;
    }
    
    const CrearList = (a) => {
        let $ul = document.createElement("ul");
        let $li = document.createElement("li");
        $li.appendChild(a);
        $ul.appendChild($li);
        return $ul;
    }
    
    $nav.appendChild(CrearList(CrearA("id-inicio", "#inicio", "INICIO")));
    $nav.appendChild(CrearList(CrearA("id-cartelera", "#cartelera", "CARTELERA")));
    $nav.appendChild(CrearList(CrearA("id-combos", "#combos", "COMBOS")));
    

}
export default navApp;