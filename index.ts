type numberArray2D = number[][];

const arrSize = 6;
const hourglassTemplate = [
  [0, 0], [0, 1], [0, 2],
   null,  [1, 1],  null ,
  [2, 0], [2, 1], [2, 2]
];

const getRandomInt = (): number => {
  const randomPositiveInt: number = Math.floor(Math.random() * 10);
  const sign: number = (Math.random() < 0.5 && randomPositiveInt) ? -1 : 1;
  return sign * randomPositiveInt;
};

const create2DArrayWithNumbers = (size: number): numberArray2D => {
  const arr = [];
  const arrSize = size;
  for (let i = 0; i < arrSize; i++) {
    arr.push([]);
    for (let j = 0; j < arrSize; j++) {
      arr[i].push(getRandomInt());
    }
  }
  return arr;
};

const getSum = (i: number, j: number): number => {
  let sum = 0;
  for (let k = 0; k < hourglassTemplate.length; k++) {
    if (hourglassTemplate[k]) {
      sum += arr[i + hourglassTemplate[k][0]][j + hourglassTemplate[k][1]];
    }
  }
  return sum;
};

const sumHourglassValues = (arr: numberArray2D): number[] => {
  const maxI = arr.length - (arr.length - 3);
  const resultArr: number[] = [];
  for (let i = 0; i <= maxI; i++) {
    for (let j = 0; j <= maxI; j++) {
      resultArr.push(getSum(i, j));
    }
  }
  return resultArr;
};

const arr = create2DArrayWithNumbers(arrSize);
const resultArray = sumHourglassValues(arr);
const maxValue = Math.max(...resultArray);

console.log('Input array: \r\n', arr);
console.log(`Results: ${resultArray}`);
console.log(`Max value is ${maxValue}`);





