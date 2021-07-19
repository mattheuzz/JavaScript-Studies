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

// const testTotal = test.reduce((accumulator, value, index, array)=>{
//     accumulator = accumulator + value
//     return accumulator
// }, 0)
// const testTotal = test.reduce((accumulator, value, index, array)=>{
//         if (value % 2 == 0){
//             accumulator.push(value)
//         }
//         return accumulator
//     }, [])
// const testTotal = test.reduce((accumulator, value, index, array)=>{
//     accumulator.push(value * 2)  
//     return accumulator
// }, [])
const testTotal = test.reduce((accumulator, value, index, array)=>{
    accumulator += value   
    return accumulator
}, 0)


const testNameReduce = testName.reduce((accumulator, value, index, array)=>{
    if (accumulator.age > value.age){
        return accumulator
    } else {
        return value
    }
     
},[])

console.log(testNameReduce)
