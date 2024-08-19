// Esercizio dadi
console.log('JS OK')

// 1.recupero l'elemento dal dom
const target = document.getElementById('target');
console.log('id', target)

// 2.raccolta dati
const max = 6;
const userPlay = Math.floor(Math.random() * max) + 1;
console.log("giocata dell'utente", userPlay);

const cpuPlay = Math.floor(Math.random() * max) + 1;
console.log("giocata del computer", cpuPlay);

// 3.lavorazione dati 
let message = '';

if (userPlay > cpuPlay){
    message = `HAI VINTO! Il tuo numero (${userPlay}) è superiore a quello del computer (${cpuPlay})`;
} else if (userPlay < cpuPlay) {
    message = `HAI PERSO! Il tuo numero (${userPlay}) è inferiore a quello del computer (${cpuPlay})`;
} else if ( userPlay === cpuPlay) {
    message = `PAREGGIO! Il tuo numero (${userPlay}) è uguale a quello del computer (${cpuPlay})`;
}

console.log(message)