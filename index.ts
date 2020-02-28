const arr = [1, 2, 3, 4, 5];
const d = 4; // number of left rotations;

let result = [...arr];

for (let i = 0; i < d; i++) {
  const firstElement = result.shift();
  result.push(firstElement);
}

console.log(result.join(' '));


