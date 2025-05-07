//const notas = {'mat': 9, 'bio': 5, 'geo': 8};

/* formas de exibir um objeto
console.log(notas['bio']);
//ou
console.log(notas.bio);
*/

/* adicionando um novo par de chave valor 
console.log(notas)
notas.eco = 10;
console.log(notas)
*/

/*
// RESGATANDO APENAS AS CHAVES
for(let nota in notas){
    console.log(nota)
}
*/

/*
// exibindo o objeto de uma forma diferente
for(let materia in notas){
    console.log(materia, ' -> ', notas[materia])
}
*/

/*
//percorrendo 
const notas = {'juca': [10, 4], 'joca': [5, 8]};
console.log(notas.juca[1]) //retorna a nota 4 
// ou console.log(notas['juca'][1]) 

*/

//melhor maneira para organizar um objeto
const notas = {
    'juca': {
        'mat': 10, 'bio': 4
    }, 
    'joca': {
        'mat': 6, 'bio': 8
    }
}
console.log(notas.juca.bio); // ou notas['juca']['bio']. retorna '4'