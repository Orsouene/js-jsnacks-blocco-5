const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const myString = names.map((element) => {
  return "'" + ` ${element}` + "'";
});
console.log(" Risultato: " + myString.join(","));
