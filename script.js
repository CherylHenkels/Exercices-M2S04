let numeros = [1,2,3,4,5,6];

// Exercicio 1
let soma = numeros.reduce((total, num) => total + num, 0)

console.log(soma);

// Exercicio 2
let pares = numeros.filter(n=> {return n%2 == 0})

console.log(pares);

// Exercicio 3
let quadrados = numeros.map(n => {return n**2});

console.log(quadrados);

// Exercicio 4
class Produto{
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}

let boneca = new Produto('boneca', 100.00, 2)
console.log(boneca);