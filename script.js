// Esercizio dadi
console.log('JS OK')

// 1.recupero l'elemento dal dom
const target = document.getElementById('target');
console.log('id gioco dei dadi', target)

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

// 4.generazione output
target.innerHTML = message;



// -------------------



// esercizio mail
// 1.recupero l'elemento dal dom
const target2 = document.getElementById('target2');
console.log('id mail', target2);

// 2.raccolta dati
const emailDataBase = ['jeromemaligaya@gmail.com', 'melvinjerome@gmail.com', 'jeromeluna@gmail.com', 'melvinluna@gmail.com', 'lunamaligaya@gmail.com'];
console.table(emailDataBase);

const emailField = document.getElementById('email');
console.log('id email', emailField);
const userEmail = emailField.value.trim();
console.log('value email', userEmail);


const button = document.querySelector('button');
console.log(button);

// 3.lavorazione dati
button.addEventListener('click', function() {
    let isValidMail = '';

    console.log('value email', userEmail);

    for (let i = 0; i < emailDataBase.length; i++){
        email = emailDataBase[i];
        console.log(email)
        if (userEmail !== email){
            isValidMail = `Il seguente indirizzo mail: ${userEmail}, può essere utilizzato.`
        } else if (userEmail === email) {
            isValidMail = `Il seguente indirizzo mail: ${userEmail}, non può essere utilizzato, poichè già esistente.`
        }
    }
    
   
})
