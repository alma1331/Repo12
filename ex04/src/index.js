function sumFibonacci(num) {
 let Fibonacci = [1, 1];
 let count = 0;
 let fibNums;

 while (num > count) {
   fibNums = Fibonacci[count] + Fibonacci[count + 1];

   if (fibNums <= num) {
     Fibonacci.push(fibNums);
   }

   count++;
 }

 return Fibonacci.filter(n => n % 2 !== 0).reduce((a,b) => a + b);

}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports=sumFibonacci;