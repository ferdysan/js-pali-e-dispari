// - Capire se la parola inserita dall’utente è
// palindroma o no (e quindi output di conseguenza)
//
// - L’utente sceglie pari o dispari e un numero da 1 a
// 5.Poi generiamo un numero random (sempre da 1 a
// 5) per il computer e dichiariamo chi ha vinto.

//chiediamo all'utente di scegliere tra pari o dispari
var scelta = prompt('Scegli se vince Pari o vince Dispari');

//chiediamo all'utente di scegliere un numero da 1 a 5
var numero =  parseInt(prompt('Scegli il tuo numero da 1 a 5'));


//quindi generiamo un numero random da 1 a 5 per il computer
var numeroPc = (Math.floor(Math.random() * 5) + 1);

//sommo quindi le variabili
var somma = numeroPc + numero;

//genero i vari if per controllare le varie probabilità controllando con il modulo il resto e di conseguenza la scelta dell'utente
if (scelta == 'pari' && somma % 2 == 0){
   document.writeln('Il numero ' + somma + 'è pari hai vinto');
}

if (scelta == 'pari' && somma % 2 != 0){
  document.writeln('Il numero ' + somma + 'è dispari hai perso');
}

if (scelta == 'dispari' && somma % 2 != 0){
   document.writeln('Il numero ' + somma + 'è dispari hai vinto');
}

if (scelta == 'dispari' && somma % 2 == 0){
   document.writeln('Il numero ' + somma + 'è pari hai perso');
}
