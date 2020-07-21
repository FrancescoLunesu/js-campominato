// Il computer deve generare 16 numeri casuali tra 1 e 100. || FATTO
// I numeri non possono essere duplicati || FATTO
// In seguito deve chiedere all'utente (100 - 16) ||
// volte di inserire un numero alla volta, sempre compreso tra 1 e 100. || FATTO
// L’utente non può inserire più volte lo stesso numero. || FATTO
// Se il numero è presente nella lista dei numeri generati, la partita termina,
//  altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente
// che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// inserisco tutto dentro a un array
// I numeri non possono essere duplicati
var numeriCas = [];
var massimo = 100;
var chance = massimo - 16;
var bomba = false;

while (numeriCas.length < 16){
    var numero = randomGen(1, 100);
    if(check(numeriCas,numero) == false){
    numeriCas.push(numero);
    }
}

console.log(numeriCas);

// In seguito deve chiedere all'utente (100 - 16) ||
// volte di inserire un numero alla volta, sempre compreso tra 1 e 100. || FATTO
// L’utente non può inserire più volte lo stesso numero. || FATTO

var numeriUtente = [];

// dichiaro una variabile J (che rappresenta il punteggio del giocatore) da incrementare di +1 ad ogni giro del ciclo while e che viene stampata quando il gioco si interrompe e il giocatore perde
var j = 0;
while (numeriUtente.length < chance && bomba == false){
    var numUtente = parseInt(prompt("Inserisci un numero:"));

    // Se il numero è presente nella lista dei numeri generati, la partita termina,
    //  altrimenti si continua chiedendo all'utente un altro numero.

    // aggiungo un if e utilizzo la funzione check per controllare se il numero insierito dall'utente è presente nell'array dei numeri generati dal PC. Se è presente la variabile "bomba" cambia il suo valore da false a true ed esce fuori dal ciclo while

    if(check(numeriCas, numUtente)){
        bomba = true;
    // se la variabile bomba è true, la partita si interrompe (esce fuori dal ciclo while) e comunica al giocatore il punteggio (variabile J)
        if (bomba == true) {
            alert("Hai perso! Il tuo punteggio è:" + " " + j);
        }
    }

    // utilizzo la funzione check per controllare che l'utente non inserisca lo stesso numero più volte. Se il numero non è stato già inserito, viene aggiunto all'array numeriUtente[], altrimenti compare un alert che avvisa l'utente che è già stato inserito
    if(check(numeriUtente, numUtente) == false){
        numeriUtente.push(numUtente);
    } else {
        alert("ATTENZIONE hai già inserito questo numero, inseriscine uno diverso:");
    }

    j++;

    if(numeriUtente.length == chance && bomba == false){
        alert("COMPLIMENTI!! HAI VINTO!!!");
    }
}

console.log(numeriUtente);







// var possibilita = massimo - numeriCas.length;
// var numeriUtente = [];
//
// while (numeriUtente.length < 10){
//     var number = parseInt(prompt("Inserisci un numero:"));
//     if(check(numeriCas,numero) == false){
//     numeriUtente.push(number);
// } else {
//     alert("ATTENZIONE hai già inserito questo numero, inseriscine uno diverso:");
// }
// }
//
// console.log(numeriUtente);




//
// if (trovato){
//     alert("hai vinto!")
// } else{
//     alert("hai perso!")
// }


// *** FUNZIONI ***

// funzione per generare numeri random

function randomGen(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}
// la funzione cerca un elemento in un array e restituisce un valore booleano (true o false)
function check(array, num){
    var i = 0;
    while (i < array.length){
        if (num == array[i]){
            return true;
        }
        i++;
    }
    return false;
}


//
// var numeriUtente = [];
//
// for (var i = 0; i<16; i++){
//     var numgen = Math.floor(Math.random()*100)+1;
//     if(numgen != numeriCas){
//         numeriCas.push(numgen);
//     }
// }
//
// console.log(numeriCas);
//
// // In seguito deve chiedere all'utente (100 - 16)
// // volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L’utente non può inserire più volte lo stesso numero.
// for (var i = 0; i < 10; i++){
//     var utente = parseInt(prompt("Inserisci un numero:"));
//     if (utente != numeriUtente){
//         numeriUtente.push(utente);
//     } else {
//         alert("ATTENZIONE, il numero è già stato inserito");
//         i--;
//     }
// }
//
// console.log(numeriUtente);
