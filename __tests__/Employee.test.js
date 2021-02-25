const {TestResult} = require("@jest/types");

const Employee = require('../lib/Intern');
const{number}= require('yargs');


const testEmployee = new Employee("trae",  "trae_mcnabb1357@gmail.com", 23, "employee");


test('has a name', ()=> {
    expect(testEmployee.name).toEqual(expect.any(String))
    expect(testEmployee.name.length).toBeGreaterThan(2)
})
test('Id has value', ()=>{
    expect(testEmployee.id).toEqual(expect.any(Number))
})

test('has a valid email',()=> {
    expect(testEmployee.email).toEqual(expect.stringContaining('@'))
})
test('Role', ()=>{
    expect(testEmployee.getSchool()).toBe('employee')
})
