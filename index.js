let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let todos = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    todos.unshift(numeros[i]);
  } else {
    todos.push(numeros[i]);
  }
}

console.log(todos);
