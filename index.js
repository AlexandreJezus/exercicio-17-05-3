let numeros = [4, 3, 1, 5, 5, 7, 7, 2, -47, 2001];

let todos = [];

for (let i = 0; i < numeros.length; i++) {
  console.log("No primeiro laço ", numeros[i]);
  for (let j = i + 1; j < numeros.length; j++) {
    console.log("No segundo laço ", numeros[j]);
    if (numeros[i] > numeros[j]) {
      let aux = numeros[i];
      numeros[i] = numeros[j];
      numeros[j] = aux;
    } else if (numeros[i] == numeros[j]) {
      numeros.splice(j, 1);
    }
  }
}
console.log(numeros);
