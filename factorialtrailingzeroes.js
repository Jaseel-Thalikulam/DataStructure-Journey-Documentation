function factorialTrailingZeroes(n) {
    if (n < 5) {
      return 0;
    } else {
      return Math.floor(n / 5) + factorialTrailingZeroes(Math.floor(n / 5));
    }
  }
  
  console.log(factorialTrailingZeroes(10)); 