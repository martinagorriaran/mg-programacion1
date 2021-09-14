import Anime from './anime.js'

const mostrar = () => {

    const instancia = new Anime()
    instancia.obtenerCatalogo();

}

const boton = document.getElementById("btn_obtener")
boton.addEventListener("click", mostrar)

const mostrar2 = () => {

    const instancia = new Anime()
    instancia.obtenerFotos();
}

const boton2 = document.getElementById("btn_obtenerf")
boton2.addEventListener("click", mostrar2) 