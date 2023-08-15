console.log("typescript basics")

function add(num1: number, num2: number){
    return num1 + num2
}

let num1 = 50
// let num1 = '50'
let num2 = 10

console.log(add(num1,num2))


enum Role {ADMIN='ADMIN', ACCESS=100}

let person : {
    name: string,
    age: number,
    hobbies: string[],
    roles: [Role.ACCESS, Role.ADMIN]
} = {
    name: 'ghouse',
    age: 33,
    hobbies: ['batminton', 'walking'],
    roles: [Role.ACCESS, Role.ADMIN]
}

// person.roles[1]='admin' error here


let person1 : {
    name: string,
    age: number,
    hobbies: string[],
    roles: [number, string]
} = {
    name: 'ghouse',
    age: 33,
    hobbies: ['batminton', 'walking'],
    roles: [10, 'admin']
}

// person1.roles[1] = 10 error here