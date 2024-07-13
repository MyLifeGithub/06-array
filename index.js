let arr1 = [
    1,
    'a',
    true,
    ['abc']
]
let arr2 = [
    2,
    3
]

// console.log(arr1[1]); index`
// console.log(arr1.at(1)); index
// console.log(arr1.indexOf('a')); elem
// console.log(arr1.slice(0,2)); index
// console.log(arr1.splice(10,10)); index
// console.log(arr1.concat(arr2)); elem
// console.log(arr1.includes('true')); elem
// console.log(arr1.length); index
// console.log(arr1.at(arr1.length - 1)); index

let index = +prompt('Name the car index');             
let arr = [1,2,3,4,5,6];                        
console.log(arr[index]);
if (arr[index] < arr.length-1 ) {
    arr.splice(index,1)
    console.log(arr);
}
else {
    alert('This car does not exist')
}

