function tabuada(){
    let num = document.getElementById("num1").value; 
    let msg = document.getElementById("msg"); 
    num = parseInt(num, 10); // Converte para número inteiro

    if (!isNaN(num)) { 
        msg.value = ""; 
        for (let i = 1; i <= 10; i++) {
            msg.value += `${num} x ${i} = ${num * i}\n`; 
        }
    } else {
        alert("Por favor, digite um número válido!");
    }
}