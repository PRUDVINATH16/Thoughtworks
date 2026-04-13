const fs = require('fs');

const data = fs.readFileSync('students.txt');
const students = JSON.parse(data.toString());

let females = students.filter( student => student.gender == "female");
fs.writeFileSync("females.txt", JSON.stringify(females));

console.log(typeof students)