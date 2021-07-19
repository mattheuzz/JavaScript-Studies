const test = [1, 4, 6, 8, -4, 77, 32, 12, 67, 80]

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

const testPares = test.filter((value)=>{
    return value % 2 == 0
})
console.log(testPares)

const double = [...test]
const testDouble = double.map((value)=>{
    return value * 2
})
console.log(testDouble)

const testSoma = test.reduce((accumulator, value)=>{
    return accumulator += value
}, 0)
console.log(testSoma)