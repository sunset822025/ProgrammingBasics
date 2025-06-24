function isPrime(num){
  for (let i =2 ; i < num ; i++){
    if (num % i == 0) return false;
  }
  return num > 1;
}

function prime(max){
  for(let i = 2 ; i < max ; i++)
    if(isPrime(i)) console.log(i);
}

let num = prompt("Please enter number to check");
prime(num);