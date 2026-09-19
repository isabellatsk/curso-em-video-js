let num = [7, 8, 9, 5];
console.log(`vetor: ${num}`);

num.sort();
console.log(`vetor agora em ordem: ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

num.push(22);
console.log(`vetor com numero adicionado: ${num}`);

for (i=0; i < num.length; i++){
    console.log(`O indice ${i} armazena o valor ${num[i]}`);
}

console.log("")
//funciona só com arrays e objetos - forma mais simples (faz mesma coisa que ta em cima)
for(i in num){
    console.log(`O indice ${i} armazena o valor ${num[i]}`);
}

//diz onde ta valor especifico dentro do array (indice)
console.log(num.indexOf(8));// mostra o indice que ta
console.log(num.indexOf(1)); // -1 significa que não encontrou