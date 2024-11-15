const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const myString = people.map((element) => {
  return "'" + element.name + "'";
});
console.log(" Risultato: " + myString.join(","));
