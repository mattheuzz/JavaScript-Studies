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


const testDouble = test.map((value, index, array)=>{
    return value * 2
})
console.log(testDouble)

const testObj = testName.map((value, index, array)=>{
    value.id = index
    return /*value.name*/ /*value.age*/ value
})

console.log(testObj)