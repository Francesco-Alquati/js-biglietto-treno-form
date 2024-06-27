// // CHIEDO ALLUTENTE DI INSERIRE IL NUMERO DI KM CHE VUOLE PERCORRERE E LA SUA ETà
// let km = prompt('Quanti KM vuoi percorrere?');
// let eta = prompt('Quanti anni hai?');

// // CALCOLO DEL PREZZO AL KM 
// let prezzo_base = (km * 0.21);

// // DICHIARO UNA VARIABILE PER IL PREZZO FINALE
// let prezzo_finale = prezzo_base;

// // CALCOLO DELLO SCONTO PER FASCE DI ETà
// if (eta < 18) {
//     prezzo_finale = prezzo_base * 0.8;
// }
// if (eta > 65) {
//     prezzo_finale = prezzo_base * 0.6;
// }

// // PREZZO DEL BIGLIETTO 
// let prezzo = `Prezzo del biglietto : ` + prezzo_finale.toFixed(2) + `€`;
// console.log(prezzo);

// BOTTONE PER CALCOLARE IL PREZZO
const btn = document.getElementById('btn-prize');
btn.addEventListener('click', function (){
    let nome = document.getElementById('name').value;
    let cognome = document.getElementById('surname').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('age').value;

    let prezzo_base = (km * 0.21);
    let prezzo_finale = prezzo_base;
    let sconto = `No`

    if (eta < 18) {
        prezzo_finale = prezzo_base * 0.8;
        sconto = `20%`
    }
    if (eta > 65) {
        prezzo_finale = prezzo_base * 0.6;
        sconto = `40%`
    }

    document.getElementById('titolare-biglietto').innerHTML = `${nome} ${cognome}`;
    document.getElementById('prezzo-base').innerHTML =  prezzo_base.toFixed(2) + `€`;
    document.getElementById('sconto').innerHTML =  sconto;
    document.getElementById('prezzo').innerHTML =  prezzo_finale.toFixed(2) + `€`;

})


