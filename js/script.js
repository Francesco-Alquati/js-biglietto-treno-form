// CHIEDO ALLUTENTE DI INSERIRE IL NUMERO DI KM CHE VUOLE PERCORRERE E LA SUA ETà
let km = prompt('Quanti KM vuoi percorrere?');
let eta = prompt('Quanti anni hai?');

// CALCOLO DEL PREZZO AL KM 
let prezzo_base = (km * 0.21);

// DICHIARO UNA VARIABILE PER IL PREZZO FINALE
let prezzo_finale = prezzo_base;

// CALCOLO DELLO SCONTO PER FASCE DI ETà
if (eta < 18) {
    prezzo_finale = prezzo_base * 0.8;
}
if (eta > 65) {
    prezzo_finale = prezzo_base * 0.6;
}

// PREZZO DEL BIGLIETTO 
let prezzo = `Prezzo del biglietto : ` + prezzo_finale.toFixed(2) + `€`;
console.log(prezzo);
