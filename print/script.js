function mostrar(){
    var texto = document.getElementById('i1').value
    var color = document.getElementById('i2').value
    var data = document.getElementById('i3').value
    var check = document.getElementById('i4').value
    var printDIV = document.getElementById('print')

    var printTexto = document.getElementById('printTexto')
    var printColor = document.getElementById('printColor')
    var printData = document.getElementById('printData')
    var printCheck = document.getElementById('printCheck')

    printTexto.textContent = `O texto digitado foi: ${texto}`
    printColor.innerHTML = `A cor digitado foi: ${color}`
    printData.innerHTML = `A data escolhida foi: ${data}`
    printCheck.innerHTML = `Você esta vivo?: ${check}`
    printDIV.style.display = 'block'

    printDIV.style.backgroundColor = color

}