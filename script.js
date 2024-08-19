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