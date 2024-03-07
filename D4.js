/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (b, h) {
  const areaOfRectangle = b * h;
  return areaOfRectangle;
};
console.log("l'area del rettangolo è ", area(8, 4));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let result = n1 + n2;
  if (n1 === n2) {
    result = result * 3;
  }
  return result;
};
console.log("il risultato è ", crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1) {
  let result = Math.abs(n1 - 19);
  if (n1 > 19) {
    result = result * 3;
  }
  return result;
};
console.log("la differenza assoluta tra i due numeri è ", crazyDiff(19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  let result;
  if ((n >= 20 && n <= 100) || n === 400) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
console.log("la condizione è", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (newString) {
  let testString = "";
  for (let i = 0; i < 7; i++) {
    testString += newString[i];
  }
  if (testString != "EPICODE" || testString.length < 7) {
    newString = "EPICODE" + newString;
    console.log(newString);
  } else {
    console.log(newString);
  }
};
epify("xd");
//esiste la funzione startsWith che lo avrebbe reso più semplice

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  let result;
  if (n % 3 === 0 || n % 7 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
console.log("il numero è multiplo di 3 o 7", check3and7(14));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let reverseString = function (string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};
console.log("il contrario della parola fornita è", reverseString("dracula"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
};
console.log(upperFirst("ciao a tutti"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (stringa) {
  let newString;
  newString = stringa.slice(1, stringa.length - 1);
  return newString;
};
console.log(cutString("dracula"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.round(Math.random() * 10));
  }
  return randomNumbers;
};
console.log(giveMeRandom(99));
