const fs = require('fs')

const inquier = require('inquirer');
const {

} = require('zlib');

const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require ('./lib/Intern');
const Manager = require('./lib/Manager')

// const generatePage = require('./site/page-template')

// const writeHTML = require('./site/generate-site')


const team = []

function getManagerInfo(){
    inquier.prompt([
        {
        type:'input',
        name:'name',
        message:'Managers Name',
        validate: nameInput =>{
            if (nameInput){
                return true;
            }else {
                console.log('Enter Managers name!')
                return false
            } 
        }
    },
    {
        type:'input',
        name:'id',
        message: 'enter Managers id',
        validate: idInput =>{
            if(idInput){
                return true;
            } else {
                console.log('Please enter a valid ID!')
            }
        }

    },
    

    {
        type:'input',
        name:'email',
        message:'Enter managers email?',
        validate: emailInput =>{
            if(emailInput){
                return true;
            }else {
                console.log('What is your managers email!')
            }return false;
        }
    },
    {
        type:'input',
        name:'officeNumber',
        message:'Mangers office number ?',
        validate: officeNumber =>{
            if(officeNumber){
                return true;
            }else {
                console.log('what is your managers office number?')
            }return false;
        }
    }
 
])

.then(answers=>{
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
   team.push(manager)
    addMore()

   
})
};
getManagerInfo()

function addMore(){
    inquier.prompt([{
        type:'confirm',
        name:'addNew',
        message:'Add a new Team Member?'
    }])
    .then(res =>{
        if (res.addNew=== true){
            getInfo()
        } else{
            console.log('team', team)
            // writeHTML(theCardsHTML)
        }
    })

     
}

function getInfo(){
     inquier.prompt({
         type:'list',
         message:'Which Employee do you want to add?',
         choices:["Engineer","Intern"],
         name:'role'
     })
   .then(answers=>{
    if (answers.role === 'Engineer'){
        inquier.prompt([
            {
                type:'input',
                name:'name',
                message:'Name',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    }else {
                        console.log('Enter name!')
                        return false
                    } 
                }
            },
            {
                type:'input',
                name:'id',
                message:'Your Id',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    }else {
                        console.log('Enter your Id!')
                        return false
                    } 
                }
            },
            {
                type:'input',
                name:'email',
                message:'Your email',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    }else {
                        console.log('Enter Email!')
                        return false
                    } 
                }
            },
            {
            type:'input',
            name:'gitHub',
            message:'Enter Engineers gitHub',
            validate: gitInput =>{
                if(gitInput){
                    return true;
                } else {
                    console.log('Enter github name!')
                }
            }
        }])
        .then(answers =>{
            

            const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub)
            team.push(engineer);
            addMore()
        })

    }else {
        inquier.prompt([
            {
                type:'input',
                name:'name',
                message:'Name',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    }else {
                        console.log('Enter name!')
                        return false
                    } 
                }
            },
            {
                type:'input',
                name:'id',
                message:'Your Id',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    }else {
                        console.log('Enter your Id!')
                        return false
                    } 
                }
            },
            {
                type:'input',
                name:'email',
                message:'Your email',
                validate: nameInput =>{
                    if (nameInput){
                        return true;
                    }else {
                        console.log('Enter Email!')
                        return false
                    } 
                }
            },
            {
            type:'input',
            name:'school',
            message:'Enter School',
            validate: gitInput =>{
                if(gitInput){
                    return true;
                } else {
                    console.log('Enter School name!')
                }
            }
        }])
        .then(answers =>{
            

            const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
            team.push(intern);
            addMore()
        })
    }
   })
   
}