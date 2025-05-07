const notas = {
    'juca': {
        'mat': 10, 'bio': 4
    },
    'joca': {
        'mat': 6, 'bio': 8
    }
}

let num = 1
for (let key in notas){
     for(let key2 in notas[key]){
        console.log(`${num}. ${key}: ${key2} ${notas[key][key2]}`)
     num++
}
}