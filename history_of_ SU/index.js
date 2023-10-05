const array = [10, 20, 34, 12, 99, 2, 15];
const pares = [];
const impares = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    pares.push(array[i]); 
  } else {
    impares.push(array[i]); 
  }
}

console.log(pares); 
console.log(impares); 
