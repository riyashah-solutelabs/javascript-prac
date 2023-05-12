// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         console.log("i = ",i);
//       for (let j = 2; j < i; j++) {
//             console.log("j = ",j);
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // a prime
//     }
//   }
//   showPrimes(5)

// for(i=1;i<5;i++){
//     console.log("i = ",i);
//     if(i==1){
//         continue;
//     }
// }

// a number that is only divisible by 1 and itself.
// 2,3,5,7,11

// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // a prime
//     }
//   }
//   showPrimes(5)
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }
//   isPrime(5) true