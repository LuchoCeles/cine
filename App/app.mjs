const app = () =>{
    
    const $div = document.getElementById("div-main");
    const $inicio = document.getElementById("id-inicio");
    const $cartelera = document.getElementById("id-cartelera");
    const $combos = document.getElementById("id-combos");
    
    const CrearA = (id,href,text) =>{
        let $a = document.createElement("a");
        $a.setAttribute("id",id);
        $a.href = href;
        $a.text = text;
        return $a;
    }

    const CrearList = (a) =>{
        let $ul = document.createElement("ul");
        let $li = document.createElement("li");
        $li.appendChild(a);
        $ul.appendChild($li);
        return $ul;
    }
    $div.appendChild(CrearList(CrearA("id-inicio", "#inicio", "INICIO")));
    $div.appendChild(CrearList(CrearA("id-cartelera", "#cartelera", "CARTELERA")));
    $div.appendChild(CrearList(CrearA("id-combos", "#combos", "COMBOS")));


    const NavElements =(id) =>{
        switch(id){
            case "id-inicio":
                $inicio.style.display = "block";
                break;
            case "id-cartelera":
                $cartelera.style.display = "block";
                break;
            case "id-combos":
                $combos.style.display = "block";
                break;
        }
    }
}

export default app;