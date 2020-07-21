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
var bomba = false;

// Il giocatore può scegliere il livello di gioco tra facile, medio o difficile. In base alla sua scelta la variabile "scelta" avrà un determinato valore. Utilizzando lo switch diamo un valore alla variabile "massimo" (50 se facile, 80 se medio e 100 se difficile). Come valore di default nello switch ho impostato 100 (difficile)
var scelta = prompt("Scegli il livello di gioco: facile, medio o difficile");
switch(scelta){
    case "facile":
    var massimo = 50;
    break;
    case "medio":
    var massimo = 80;
    break;
    case "difficile":
    var massimo = 100;
    default:
    var massimo = 50;
}

var chance = massimo - 16;

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

while (numeriUtente.length < chance && bomba == false){
    var numUtente = parseInt(prompt("Inserisci un numero:"));
    // Se il numero è presente nella lista dei numeri generati, la partita termina,
    //  altrimenti si continua chiedendo all'utente un altro numero.

    // aggiungo un if e utilizzo la funzione check per controllare se il numero insierito dall'utente è presente nell'array dei numeri generati dal PC. Se è presente la variabile "bomba" cambia il suo valore da false a true ed esce fuori dal ciclo while

    if(check(numeriCas, numUtente)){
        bomba = true;
    // se la variabile bomba è true, la partita si interrompe (esce fuori dal ciclo while) e comunica al giocatore il punteggio (lunghezza array numeriUtente)
        if (bomba == true) {
            alert("Hai perso! Il tuo punteggio è:" + " " + numeriUtente.length);
        }
    }

    // utilizzo la funzione check per controllare che l'utente non inserisca lo stesso numero più volte. Se il numero non è stato già inserito, viene aggiunto all'array numeriUtente[], altrimenti compare un alert che avvisa l'utente che è già stato inserito

    if(numUtente < 0 || numUtente > 100){
         alert("Attenzione. Il numero inserito dev'essere tra 1 e 100. Inserisci di nuovo il numero:")
    } else if(check(numeriUtente, numUtente) == false){
        numeriUtente.push(numUtente);
    } else {
        alert("ATTENZIONE hai già inserito questo numero, inseriscine uno diverso:");
    }

    if(numeriUtente.length == chance && bomba == false){
        alert("COMPLIMENTI!! HAI VINTO!!! Il tuo punteggio è:" + " " + numeriUtente.length);
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

// function verNum (number){
//     if(number < 0 || number > 100){
//         return alert("Attenzione. Il numero inserito dev'essere tra 1 e 100. Inserisci di nuovo il numero:")
//     }
// }

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
