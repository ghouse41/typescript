console.log("typescript basics");
function add(num1, num2) {
    return num1 + num2;
}
var num1 = 50;
// let num1 = '50'
var num2 = 10;
console.log(add(num1, num2));
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["ACCESS"] = 100] = "ACCESS";
})(Role || (Role = {}));
var person = {
    name: 'ghouse',
    age: 33,
    hobbies: ['batminton', 'walking'],
    roles: [Role.ACCESS, Role.ADMIN]
};
// person.roles[1]='admin' error here
var person1 = {
    name: 'ghouse',
    age: 33,
    hobbies: ['batminton', 'walking'],
    roles: [10, 'admin']
};
// person1.roles[1] = 10 error here
