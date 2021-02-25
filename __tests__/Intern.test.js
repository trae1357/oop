const {TestResult} = require("@jest/types");

const Intern = require('../lib/Intern');
const{number}= require('yargs');


const testIntern = new Intern("trae", "trae_mcnabb1357@gmail.com", 22, "school");


test('has a name', ()=> {
    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.name.length).toBeGreaterThan(2)
})
test('has a valid email',()=> {
    expect(testIntern.email).toEqual(expect.stringContaining('@'))
})
test('name of School', ()=>{
    expect(testIntern.getSchool()).toBe('school')
})
test('Id has value', ()=>{
    expect(testIntern.id).toEqual(expect.any(Number))
})
