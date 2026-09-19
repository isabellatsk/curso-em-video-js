function verifique(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0  || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') //criou um img com id='foto' mesma coisa que: <img id='foto'> no hmtl

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'crianca-f.jpg')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher' 
            if(idade >=0 && idade<=10){
                //criança
                img.setAttribute('src', 'crianca-m.jpg')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosa-mulher.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//adicionar um elemento, nesse caso a imagem
    }
}