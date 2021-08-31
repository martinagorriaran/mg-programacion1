import Bhaskara from "./bhaskara.js";

const mostrar = () => {

  const a = document.getElementById("inp_a").value
  const b = document.getElementById("inp_b").value
  const c = document.getElementById("inp_c").value

  const instancia = new Bhaskara(a,b,c)
  //ejecute la funcion que calcula raiz 1
  const r1= instancia.calcular_raiz1()

  //ejecute la funcion que calcula raiz 2
  const r2= instancia.calcular_raiz2()

    document.getElementById("r1").textContent = r1; 
    document.getElementById("r2").textContent = r2; 

}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar) 
