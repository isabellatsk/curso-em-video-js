function parimp(num){
    if(num % 2 == 0){
        return `O numero ${num} é par`
    } else{
        return `O numero ${num} é impar`
    }
}


console.log(parimp(3));

//se nenhum valor for passado ele conta como 0
function soma(n1=0, n2=0){
    return n1 + n2;
}
console.log(soma())


let v = function(x){
    return x*2;
}
console.log(v(5));


function fatorial(num){
    let fat = 1;
    for(i=1; i <= num; i++){
        fat = fat * i;
    }
    return fat
}
console.log(fatorial(5));

//maneira recursiva de calcular fatorial
function fatorial2(n){
    if (n==1){
        return 1
    } else{
        return n * fatorial2(n-1);
    }
}  console.log(fatorial2(5));
/*
5! = 5 x 4 x 3 x 2 x 1

5! = 5 x 4!
n! = n x (n-1)!
1! = 1
*/