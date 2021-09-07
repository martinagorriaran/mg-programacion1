import Comentario from "./comentario.js";

const mostrar = () => {

    const instancia = new Comentario()
    instancia.obtenerComentario();
}

const boton = document.getElementById("btn_obtener")
boton.addEventListener("click", mostrar) 

const mostrar2 = () => {

    const instancia = new Comentario()
    instancia.obtenerFotos();
}

const boton2 = document.getElementById("btn_obtenerf")
boton2.addEventListener("click", mostrar2) 