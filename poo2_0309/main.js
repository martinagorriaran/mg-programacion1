import Area from "./area.js";

const mostrar = () => {

  const radio = document.getElementById("inp_radio").value

  const instancia = new Area(radio)

  const resultadoareac= instancia.calcular_areac()

  document.getElementById("resultadoareac").textContent = resultadoareac; 
}

const mostrar2 = () =>{

    const base = document.getElementById("inp_base").value
    const altura = document.getElementById("inp_altura").value

    const instancia = new Area('',base,altura)

    const resultadoareatriangulor= instancia.calcular_areatriangulor()

    document.getElementById("resultado_triangulor").textContent = resultadoareatriangulor; 
}

const mostrar3 = () =>{

    const basesup = document.getElementById("inp_bs").value
    const baseinf = document.getElementById("inp_bi").value
    const altura_tra = document.getElementById("inp_altura2").value

    const instancia = new Area('','','',basesup,baseinf,altura_tra)

    const resultadoareaatrapecio= instancia.calcular_areatrapecio()

    document.getElementById("resultado_trapecio").textContent = resultadoareaatrapecio; 
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar) 

const boton1 = document.getElementById("btn_calcular2")
boton1.addEventListener("click", mostrar2)

const boton2 = document.getElementById("btn_calcular3")
boton2.addEventListener("click", mostrar3)
