function check(){
    var wasBorn = parseInt(document.getElementById('birth').value)
    var res = document.getElementById('result')
    var clientAge = document.getElementById('Age')

    if(isNaN(wasBorn)){
        res.textContent = "Type only nunbers🚫"
        res.style.color ="red"
        return
    }

    const thisYear = new Date().getFullYear()
    const Age = thisYear - wasBorn

    if(Age >=18){
        res.textContent = "Over 18, entry ✅"
        clientAge.textContent = Age
        document.getElementById('v1').style.display = 'block'
        document.getElementById('v2').style.display = 'none'
    }else{
        res.textContent = "Under 18, not allowed"
        document.getElementById('v1').style.display = 'none'
        document.getElementById('v2').style.display = 'block'
    }

}