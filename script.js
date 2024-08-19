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

let messageResult = document.getElementById('message');

const button = document.querySelector('button');
console.log(button);

// 3.lavorazione dati
button.addEventListener('click', function() {
    let isValidMail = false;

    let messageValid = '';

    const userEmail = emailField.value.trim();
    console.log('value email', userEmail);

    for (let i = 0; i < emailDataBase.length; i++){
        email = emailDataBase[i];
        // verifico se la mail è presente nell'array
        if (userEmail === email){
            isValidMail = true  ;
        } 
    }

    console.log(isValidMail)

    if (isValidMail) {
        messageValid = `Il seguente indirizzo mail: <span class='text-danger'><strong>${userEmail}</strong></span>, non può essere utilizzato, poichè già esistente.`;
       
    } else{
        messageValid = `Il seguente indirizzo mail: <span class='text-success'><strong>${userEmail}</strong></span>, può essere utilizzato.`;
    }
    
    console.log(messageValid)

    // generazione otput
    messageResult.innerHTML = messageValid;
   
})
