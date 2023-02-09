const roundTo = (Zahl, Genauigkeit) => {
    let roundedNumber = Number(Zahl.toFixed(Genauigkeit))
    return roundedNumber
}

console.log(roundTo(3.1415926535, 5))