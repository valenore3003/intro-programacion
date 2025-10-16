const rojo = document.getElementById("rojo")
const azul = document.getElementById("azul")
const verde = document.getElementById("verde")
const div = document.getElementById("filtro")
let valorRojo = 0
function coloreardiv (){
    div.style.backgroundColor= `rgb(${valorRojo},100,100)`
}
rojo.onchange = (ev) => {
    valorRojo = ev.target.value
    console.log("mononomnomnomnon")
    coloreardiv()
}