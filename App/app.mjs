const app = () =>{
    
    const $div = document.getElementById("div-main");
    const $inicio = document.getElementById("id-inicio");
    const $cartelera = document.getElementById("id-cartelera");
    const $combos = document.getElementById("id-combos");
    const $btnInicio = document.getElementById("id-btnInicio");
    const $btnCartelera = document.getElementById("id-btnCartelera");
    const $btnCombos = document.getElementById("id-btnCombos");
    
    const CrearBtn = (id) => {
        let $btn = document.createElement("button");
        $btn.setAttribute("id",id);
        return $btn;
    }

    $div.appendChild(CrearBtn("id-btnInicio"));
    $div.appendChild(CrearBtn("id-btnCartelera"));
    $div.appendChild(CrearBtn("id-btnCombos"));

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

    $btnInicio.addEventListener("click", () => { NavElements ("id-inicio"); });
    $btnCartelera.addEventListener("click", () => { NavElements ("id-cartelera"); });
    $btnCombos.addEventListener("click", () => { NavElements ("id-combos"); });
}

export default app;