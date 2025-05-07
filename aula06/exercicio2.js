const notas = {
    'juca': {
        'mat': 10, 'bio': 4
    },
    'joca': {
        'mat': 6, 'bio': 8
    }
}

/*
for (let num = 0; num > 0; num ++){
    for(let nome in notas){
        console.log(`${num}. ${nome} - `)
        console.log(notas)
    }
}

for(let nome in notas){
console.log(nome, ': ', notas[nome]);
}
*/

let num = 1
for (let key in notas){
     for(let key2 in notas[key]){
        console.log(`${num}. ${key}: ${key2} ${notas[key][key2]}`)
     
}
}