let numeros = [1,2,3,4,5,6];

// Exercicio 1
let soma = numeros.reduce((total, num) => total + num, 0)

console.log(soma);

// Exercicio 2
let pares = numeros.filter(n=> {return n%2 == 0})

console.log(pares);