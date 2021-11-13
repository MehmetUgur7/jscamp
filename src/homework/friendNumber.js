function friendNumer(number1, number2) {
    let total1 = 0
    let total2 = 0
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        }        
    }
    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0) {
            total2 = total2 + j
        }        
    }

    if (total1 == number2 && total2 == number1) {
        console.log("Verilen sayılar arkadaş sayılardır!")
    }else{
        console.log("Verilen sayılar arkadaş sayı değildir!")
    }
}

friendNumer(220,284)
  