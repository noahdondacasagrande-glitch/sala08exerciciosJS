function media(){
    var a =parseFloat(document.getElementById("nota1").value)
    var b =parseFloat(document.getElementById("nota2").value)
    var c =parseFloat(document.getElementById("nota3").value)
    var respmedia = document.getElementById("resposta")
    var media = (a+b+c) / 3

    if(media>= 7){
        respmedia.textContent = `${media.toFixed(2)} - passou de ano`
    }else{
        respmedia.textContent = `${media.toFixed(2)} - reprovou de ano!!`
    }
}