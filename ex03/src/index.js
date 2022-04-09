function rangeOfNumbers(startN, endN) {
 return startN <= endN ? [startN].concat(rangeOfNumbers(startN+1, endN)) : []



}
console.log(rangeOfNumbers(1, 7)),
console.log(rangeOfNumbers(3,10)),
console.log(rangeOfNumbers(5,5)),
console.log(rangeOfNumbers(7,5));
module.exports = rangeOfNumbers;