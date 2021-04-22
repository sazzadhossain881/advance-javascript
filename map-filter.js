const numbers=[3,4,5,6,7,8];
// const output=[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result=element*element;
//     output.push(result);
// }
// console.log(output)

// const result=numbers.map(function square(element){
    // return element*element;
// })
// console.log(result);

const name =numbers.map(x => x*x);
console.log(name);

const smaller=numbers.filter(x => x<7);
console.log(smaller);

const bigger=numbers.find(x => x>6);
console.log(bigger);