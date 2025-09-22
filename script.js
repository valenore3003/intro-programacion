const button = document.getElementById("submit")
const input = document.getElementById("texto")
button.onclick = (e) =>{
    e.preventDefault()
    console.log(input.value)
}