function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    //var hora = 16

    msg.innerText = `Agora são ${hora} horas`

    if(hora >=0 && hora < 12){
        img.src = 'manhaEdit.png'
        document.body.style.background = '#6ae2f7'
    }
    else if(hora >=12 && hora <= 18){
        img.src = 'tardeEdit.png'
        document.body.style.background = '#fcbd0f'
    }else{
        img.src = 'noiteEdit.png'
        document.body.style.background = '#001b54'
    }
}
