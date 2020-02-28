var arrSize = 6;
var hourglassTemplate = [
    [0, 0], [0, 1], [0, 2],
    null, [1, 1], null,
    [2, 0], [2, 1], [2, 2]
];
var getRandomInt = function () {
    var randomPositiveInt = Math.floor(Math.random() * 10);
    var sign = (Math.random() < 0.5 && randomPositiveInt) ? -1 : 1;
    return sign * randomPositiveInt;
};
var create2DArrayWithNumbers = function (size) {
    var arr = [];
    var arrSize = size;
    for (var i = 0; i < arrSize; i++) {
        arr.push([]);
        for (var j = 0; j < arrSize; j++) {
            arr[i].push(getRandomInt());
        }
    }
    return arr;
};
var getSum = function (i, j) {
    var sum = 0;
    for (var k = 0; k < hourglassTemplate.length; k++) {
        if (hourglassTemplate[k]) {
            sum += arr[i + hourglassTemplate[k][0]][j + hourglassTemplate[k][1]];
        }
    }
    return sum;
};
var sumHourglassValues = function (arr) {
    var maxI = arr.length - (arr.length - 3);
    var resultArr = [];
    for (var i = 0; i <= maxI; i++) {
        for (var j = 0; j <= maxI; j++) {
            resultArr.push(getSum(i, j));
        }
    }
    return resultArr;
};
var arr = create2DArrayWithNumbers(arrSize);
var resultArray = sumHourglassValues(arr);
var maxValue = Math.max.apply(Math, resultArray);
console.log('Input array: \r\n', arr);
console.log("Results: " + resultArray);
console.log("Max value is " + maxValue);
