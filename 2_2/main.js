let randomNumber = Math.floor(Math.random() * 10) + 1
console.log(randomNumber)
let input = prompt("Schätzen Sie die Nummer zwischen 1 und 10")
console.log(parseInt(input))
randomNumber === parseInt(input) ? alert("Richtig geraten") : alert("Falsch geraten")