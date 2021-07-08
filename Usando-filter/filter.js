const test = [1, 4, 6, 8, -4, 77, 32, 12, 67, 80]

// function callbackFilter (value, index, array) {
//     if (value > 10){
//         return true
//     } else{
//         return false
//     }
// } pode ser substituido por

// function callbackFilter (value, index, array) {
//     return value > 10
// }podemos também jogar ela dentro do filtro

const testFilter = test.filter((value, index, array)=> {
    //console.log(value, index, array)
    return value > 10
})
//console.log(testFilter)

const testName = [
    { 
        name: `Matheus`,
        age: 29
    },
    {
        name: `Yumi`,
        age: 31
    },
    {
        name: `Marli`,
        age: 54
    },
    {
        name: `Lucas`,
        age: 27
    },
    {
        name: `João`,
        age: 31
    },
    {
        name: `Giovanna`,
        age: 31
    }
]

const testNameBig = testName.filter((value)=>{
    return (/*value.name.length >= 6, value.age >= 30*/ value.name.toLowerCase().endsWith(`a`))
    
})
console.log(testNameBig)