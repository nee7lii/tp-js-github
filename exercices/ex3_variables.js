let notes = [12, 8, 15, 10, 7];

let somme = 0;
for (let i = 0; i < notes.length; i++) {
  somme += notes[i];
}
let moyenne = somme / notes.length;

let meilleure = notes[0];
for (let i = 1; i < notes.length; i++) {
  if (notes[i] > meilleure) {
    meilleure = notes[i];
  }
}


let compteur = 0;
for (let i = 0; i < notes.length; i++) {
  if (notes[i] >= 10) {
    compteur++;
  }
}

console.log("Moyenne :", moyenne);
console.log("Meilleure note :", meilleure);
console.log("Nombre de notes ≥ 10 :", compteur);


