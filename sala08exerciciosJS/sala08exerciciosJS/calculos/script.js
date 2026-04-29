function somar (){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var re = document.getElementById("resposta")
    re.textContent = n1 + n2
}
function mult(){
    var n3 = document.getElementById("n3").valueAsNumber
    var n4 = document.getElementById("n4").valueAsNumber
    var re= document.getElementById("respostaM")
    re.textContent = n3 * n4
}
function subtração(){
    var n5 = document.getElementById("n5").valueAsNumber
    var n6 = document.getElementById("n6").valueAsNumber
    var re = document.getElementById("respostaS")
    re.textContent = n5 - n6
}
function divisão(){
    var n7 = parseFloat(document.getElementById("n7").value)
    var n8 = parseFloat(document.getElementById("n8").value)
    var re = document.getElementById("respostaD")
    re.textContent = n7 / n8
    if(n8 !== 0){
        re.textContent = n7 / n8
    }else{
        re.textContent = "nao se divide por 0"
    }
}