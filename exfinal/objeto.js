let amigo = {nome: "jose",
    sexo: "M",
    peso: 90.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)