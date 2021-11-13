function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let checker = 0;
  
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
          checker++;
        }
      }
  
      if (checker == 0) {
        console.log(numbers[i] + " : " + " asal sayıdır");
      } else {
        console.log(numbers[i] + " : " + " asal değildir.");
      }
    }
  }
  
  findPrime(2, 3, 5, 8, 7, 12);
  
  for (let i = 1; i <= 1000; i++) {
    findPrime(i)
    
  };