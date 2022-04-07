// chiedo all'utente il numero di km che percorrerà
const kmNumber = parseInt(prompt('Inserisci il numero di km che percorrerai'));
console.log(kmNumber, typeof (kmNumber));


// chiedo l'età
const ageNumber = parseInt(prompt('Inserisci la tua età'));
console.log(ageNumber, typeof (ageNumber));

// moltiplico i km inseriti per 0.21
let ticketPrice = kmNumber * 0.21;
console.log(ticketPrice, typeof (ticketPrice));

// se l'età è compresa tra 18 e 65 mostro il risultato, altrimenti se l'età è inferiore a 18, tolgo il 20% dal risultato, altrimenti se l'età è superiore a 65 tolgo il 40% dal risultato.
if (ageNumber >= 18 && ageNumber < 65) {
    console.log(string = "tariffa normale");
} else if (ageNumber < 18) {
    console.log(string = "minorenne");
} else if (ageNumber > 65) {
    console.log(string = "senior");
}

// tolgo i decimali superflui dal risultato

// mostro il risultato del prezzo nell'html