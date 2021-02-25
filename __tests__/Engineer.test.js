const {TestResult} = require("@jest/types");

const Engineer = require('../lib/Intern');
const{number}= require('yargs');


const testEngineer = new Engineer("trae", "trae_mcnabb1357@gmail.com", 55, 32);


test('has a name', ()=> {
    expect(testEngineer.name).toEqual(expect.any(String))
    expect(testEngineer.name.length).toBeGreaterThan(2)
})
test('has a valid email',()=> {
    expect(testEngineer.email).toEqual(expect.stringContaining('@'))
})

test('Id has value', ()=>{
    expect(testEngineer.id).toEqual(expect.any(Number))
})
