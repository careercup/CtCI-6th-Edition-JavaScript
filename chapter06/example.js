This is another question at the book, it is also a common interview question

Determine if a number is prime using JavaScript

function isPrime(value){
  for(var i = 2; i < value; i++){
    if(value % i === 0){
        return false;
     }
  }
  return value > 1;
}

isPrime(11);
