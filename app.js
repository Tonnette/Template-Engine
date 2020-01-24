const fs = require('fs');
// const axios = require("axios");
const inquirer = require("inquirer");
// const Employee = require('./lib/Employee')

var engineerDetails = [];
var internDetails = [];
var managerDetails = [];


function validateName(name) {
    return name !== "";

}

function validateID(id) {
    var reg = /^\d+$/;
    return reg.test(id) || "ID should be a number!";
}

function validatePhone(phone) {
    var reg = /^\d{2}$/;
    return reg.test(phone) || "needs to be 2 numbers long!";
}


function ValidateEmail(email) {
    var goodEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return goodEmail.test(email) || "not a valid email!";

}

let engineer = 'Engineer';
let intern = 'Intern';
let manager = 'Manager';

const employeeQuestions = [
    {
        type: "input",
        name: "username",
        message: "What is your name?",
        validate: validateName,
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?",
        validate: validateID,
    },
    {
        type: "list",
        name: "title",
        message: "What is your title?",
        choices: [
            "Mr",
            "Mrs",
            "Dr",
            "Ms"
        ],
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: ValidateEmail,
    },
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: [
            engineer,
            intern,
            manager,
        ],
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    }
]

const managerQuestions = [
    {
        type: "input",
        name: "phone",
        message: "What is your office phone?",
        validate: validatePhone,
    }
]
const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school do you go to?"
    }
]

const loopQuestion = [
    {
        type: "confirm",
        name: "more",
        message: "do you want to add another employee?"
    }


]


    function askQuestion(){
        initiatePrompts ()
        
        .then( () => {
            return  inquirer.prompt(loopQuestion)
        })
        
        .then(({ more }) => {
        if (more === true) {
            askQuestion()
            
    
        } else {
            console.log("finished!");
            console.log("engineer data " + JSON.stringify(engineerDetails) + "intern data " + JSON.stringify(internDetails) + "manager data " + JSON.stringify(managerDetails) )
        }
    })
    }

    

    function initiatePrompts (){
        return inquirer
        .prompt(employeeQuestions)
        .then(({ username, id, title, email, role }) => {
            // console.log(role, engineer, role === engineer) ;
            if (role === engineer) {
                console.log('Yes, Engineer.')
                return inquirer
                    .prompt(engineerQuestions)
                    .then(({ github }) => {
                        console.log(github);
                        engineerDetails.push({username, id, email, title, github})
                        // engineerDetails.push(new engineer({username, id, email, title, github})
                        console.log(engineerDetails)
                     
                    })
            }
            else if (role === intern) {
                console.log("you're an intern");
                return inquirer
                    .prompt(internQuestions)
                    .then(({ school }) => {
                        console.log(school);
                        internDetails.push({username, id, email, title, school})
                        console.log(internDetails)
                        
                        
                    })
            }
            else if (role === manager) {
                console.log("you're a manager");
                return inquirer
                    .prompt(managerQuestions)
                    .then(({ phone }) => {
                        console.log(phone);
                        managerDetails.push({username, id, email, title, phone})
                        console.log(managerDetails)
                        
                    })
            }
        })



    }


    // let adam = new Employee(employeeData)

askQuestion()




module.exports = {}

