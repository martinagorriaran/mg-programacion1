const calcular=()=>{
    const d1 = document.getElementById("inp_a").value;
    const d2 = document.getElementById("inp_b").value;
    const d3 = document.getElementById("inp_c").value;

    const resultado1 = (-d2 + Math.sqrt((Math.pow(d2,2)-(4*d1*d3))))/(2*d1);
    document.getElementById("h_resultado1").textContent = resultado1;

    const resultado2 = (-d2 - Math.sqrt((Math.pow(d2,2)-(4*d1*d3))))/(2*d1);
    document.getElementById("h_resultado2").textContent = resultado2;

}

const boton = document.getElementById("but_calcular")
boton.addEventListener("click",calcular)