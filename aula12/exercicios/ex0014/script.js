function carregar(){
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")

    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#455225'
    } 
    else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#cc5302'
    } 
    else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#16294a'
    }
}
