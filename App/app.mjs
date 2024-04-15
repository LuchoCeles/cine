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
                $cartelera.style.display = "none";
                $combos.style.display = "none";
                break;
            case "id-cartelera":
                $inicio.style.display = "none";
                $cartelera.style.display = "block";
                $combos.style.display = "none";
                break;
            case "id-combos":
                $inicio.style.display = "none";
                $cartelera.style.display = "none";
                $combos.style.display = "block";
                break;
        }
    }

}

export default app;