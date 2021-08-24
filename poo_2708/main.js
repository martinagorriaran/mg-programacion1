import Pitagoras from "./pitagoras.js";

const ejecutar = () => {

    const instancia = new Pitagoras()

    instancia.calcular()
     
}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click",ejecutar)