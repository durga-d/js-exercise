let nums=[1,2,3,4,5,6];
//for each method
nums.forEach((n) => {
    console.log(n*2);
})
nums.forEach((n,i,nums) => {
    console.log(n, i, nums);
})

//filter method
console.log(nums.filter(n => n%2===0)); 
//prints only the even numbers

//map is used for complex operations
nums.map(n => n*2)
    .forEach(n => console.log(n)) 
//prints 2 4 6 8 10 12 

//reduce method is used to reduce the solution to the one single value
let res=nums.reduce((a,b) => a+b)
console.log(res);
//prints addition of all the numbers in nums

//filter, map and reduce put together
let result = nums.filter(n => n%2===0)
    .map(n => n*2)
    .reduce((x,y) => x+y);
console.log(result);
//filters even numbers, multiplies with 2, adds them all

