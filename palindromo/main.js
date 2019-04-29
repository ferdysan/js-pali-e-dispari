// Capire se la parola inserita dall’utente è
// palindroma o no (e quindi output di conseguenza)

// inserisco una parola in input
var parola = prompt('Inserisci la parola da controllare');
console.log(parola);

var parolaCont = parola.split('');
console.log(parolaCont);


var reverse_parolaCont = parolaCont.reverse();
console.log(reverse_parolaCont);

//
var join_parolaCont = reverse_parolaCont.join('');
console.log(join_parolaCont);

//se parola è uguale a join_parolaCont allora è un palindromo
if(parola== join_parolaCont){
  document.writeln('La parola ' + parola + ' è un palindromo')
}
else{
  document.writeln('La parola ' + parola + ' non è palindromo');
}
