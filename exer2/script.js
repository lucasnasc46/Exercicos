function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

   if(formAno.value.length == 0 || Number(formAno.value) > ano){
    window.alert('ERRO, verifique os dados e tente novamente')
   }
   else{
    var formSexo = document.getElementsByName('sexo')
    var idade = ano - Number(formAno.value)
    var genero = ''

    if(formSexo[0].checked){
        genero = 'homem'

        if(idade >=0 && idade <18){
            img.setAttribute('src', 'criancaM.png')
        }else if(idade <60){
            img.setAttribute('src', 'homem.png')
        }else{
            img.setAttribute('src', 'idoso.png')
        }

    } else if (formSexo[1].checked){
        genero = 'mulher'

        if(idade >=0 && idade <18){
            img.setAttribute('src', 'criancaF.png')
        }else if(idade <60){
            img.setAttribute('src', 'mulher.png')
        }else{
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.innerText = `detectado ${genero} com ${idade} anos`
    res.appendChild(img) //adicionando o elemento na div
    }
   }
