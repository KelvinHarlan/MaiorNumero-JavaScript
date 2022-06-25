//Faça um Programa que peça dois números e imprima o maior deles.

function maiorNumero(numero1,numero2){
    if(numero1 > numero2){
        console.log(`O primeiro número escolhido foi ${numero1}, e o segundo número escolhido foi ${numero2}, entre estes dois: O número ${numero1} é o maior número! `)
    }
    else if (numero2 > numero1){
        console.log(`O primeiro número escolhido foi ${numero1}, e o segundo número escolhido foi ${numero2}, entre estes dois: O número ${numero2} é o maior número! `) 
    }
    else{
        console.log('Número escolhido é inválido')
    }
}

maiorNumero(2,10)