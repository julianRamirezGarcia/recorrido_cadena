const cadena = "Javascript es un buen lenguaje";

console.log(cadena[3]);
console.log(cadena[6]);
console.log(cadena[8]);

const cadena2 = "Javascript es un buen lenguaje";
let element = "";

for (let index = 0; index < cadena.length; index++) {
  element = cadena2[index];
  console.log(element);
}
const cadena3 = "Somos SENA";
let elemento2 = false;

for (let index2 = 0; index2 < cadena3.length; index2++) {
  if (cadena3[index2] == "E") {
    elemento2 = true;
  }
}

if (elemento2) {
  console.log("La cadena contiene la letra E");
} else {
  console.log("La cadena no contiene la letra E");
}

const cadena4 = "Somos SENA";
let contador = 0;

for (let index3 = 0; index3 < cadena.length; index3++) {
  if (cadena4[index3] == "o") {
    contador++;
  }
}

console.log("La o se encuentra", contador, "veces");

let cadena5 = "Javascript es genial";
let contadorPalabras = 0;

for (let i = 0; i < cadena.length; i++) {
  if (cadena5[i] === " ") {
    if (i > 0 && cadena5[i - 1] !== " ") {
      contadorPalabras++;
    }
  }
}

if (cadena5[cadena5.length - 1] !== " ") {
  contadorPalabras++;
}

console.log("La cadena está compuesta por " + contadorPalabras + " palabras.");
