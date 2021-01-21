var numbers = [2, 3, 4, 2, 5, 3, 6, 7, 8, 9, 5];
var uniqueNumber = [];

for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var index = uniqueNumber.indexOf(element);
    if (index == -1) {
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);