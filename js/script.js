//1 Richiesta nome
const nome = prompt("Inserisci il tuo nome");
console.log(nome);

//2 Richiesta cognome
const cognome = prompt("Inserisci il tuo cognome");
console.log(cognome)

//3 Richiesta colore preferito
const colore_preferito = prompt("Inserisci il tuo colore preferito");
console.log(colore_preferito)

//4 Definire la variabile risultato

const password = nome + cognome + colore_preferito + 21;
console.log(password)

//5 Mostrare il risultato visivamente
document.getElementById("testo-password").innerHTML = password;