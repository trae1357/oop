const {TestResult} = require("@jest/types");

const Manager = require('../lib/Manager');
const{number}= require('yargs');

const testManager = new Manager("trae",5, "trae_mcnabb1357@gmail.com", 120);


test('has a name', ()=> {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
})
test('has a valid email',()=> {
    expect(testManager.email).toEqual(expect.stringContaining('@'))
})
test('has a role of manager', ()=>{
    expect(testManager.getRole()).toBe('Manager')
})
test('Id has value', ()=>{
    expect(testManager.id).toEqual(expect.any(Number))
})
