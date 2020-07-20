// Il computer deve generare 16 numeri casuali tra 1 e 100. || FATTO
// I numeri non possono essere duplicati || FATTO
// In seguito deve chiedere all'utente (100 - 16)
// volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
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
var numeroUtente;

for (var i = 0; i<16; i++){
    var numgen = Math.floor(Math.random()*100)+1;
    if(numgen != numeriCas){
        numeriCas.push(numgen);
    }
}

console.log(numeriCas);
