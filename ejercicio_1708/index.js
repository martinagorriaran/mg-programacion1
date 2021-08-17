const calcular=()=>{
    const d1 = document.getElementById("inp_adyacente").value;
    const d2 = document.getElementById("inp_opuesto").value;

    const resultado =Math.sqrt(Math.pow(parseInt(d1),2)+Math.pow(parseInt(d2),2));

    document.getElementById("h_resultado").textContent = resultado;
}

const boton = document.getElementById("but_calcular")
boton.addEventListener("click",calcular)