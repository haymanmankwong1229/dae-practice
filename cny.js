let number = 123456

while (number >= 10) {
    let d1 = number % 10
    let d2 = ((number - d1) / 10 ) % 10
    let rest = (number - d1 - d2 * 10) / 100
    console.log({ number, d1, d2, rest })
    
    let sum = d1 + d2 

    while(sum >=10){
        let d3 = sum % 10
        let d4 = ((sum - d3) / 10 ) % 10
        let rest2 = (sum - d3 - d4 * 10) / 100
        console.log({ sum, d3, d4, rest2 })
        sum = d3 + d4
    }
break
}

// done laaaaaa

