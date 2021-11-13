function perfectNumber() {
    let sum = 0
    for (let i = 0; i < 1000; i++) {        
        for (let j = 0; j < i; j++) {
            if (i%j == 0) {
                sum = sum + j
            }
        }
        if (i == sum) {
            console.log(i + ": Mükemmel sayıdır!")
        }
        sum = 0   
      }
}

perfectNumber()