let numbers = [1,2,3,4,5];

function reverse(arr) {
    for(let i in arr)
        arr.splice(i, 0, arr.pop());
    return arr;
}

console.log(reverse(numbers));