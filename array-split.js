const nums=[1,2,3,4,5,6,7,8];
const part=nums.slice(3,6);
const removed=nums.splice(2,5,10,20,50);
console.log(removed);
console.log(part);
console.log(nums);

const together=nums.join(",");
console.log(together);



