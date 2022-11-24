//1 Richiesta nome
let nome = prompt("Inserisci il tuo nome");
console.log(nome);

//2 Richiesta cognome
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome)

//3 Richiesta colore preferito
let colore_preferito = prompt("Inserisci il tuo colore preferito");
console.log(colore_preferito)

//4 Definire la variabile risultato

let password = "Password:" + " " + nome + cognome + colore_preferito + 21;
console.log(password)

//5 Mostrare il risultato visivamente
document.getElementById("testo-password").innerHTML = password;