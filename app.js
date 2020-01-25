const fs = require('fs');
const inquirer = require("inquirer");
const generateHTML = require('./generateHTML');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const convertFactory = require('electron-html-to');
const Engineer = require('./lib/Engineer')


var employeeDetails = [];

// array.js




function validateName(name) {
    return name !== "";

}

function validateID(id) {
    var reg = /^\d{3}$/;
    return reg.test(id) || "ID should be 3 numbers!";
}

function validatePhone(officeNumber) {
    var reg = /^\d{2}$/;
    return reg.test(officeNumber) || "needs to be 2 numbers long!";
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
        name: "name",
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
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: ValidateEmail,
    },

    // {
    //     type: "list",
    //     name: "title",
    //     message: "What is your title?",
    //     choices: [
    //         "Mr",
    //         "Mrs",
    //         "Dr",
    //         "Ms"
    //     ],
    // },
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
        name: "officeNumber",
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


function askQuestion() {
    initiatePrompts()

        .then(() => {
            return inquirer.prompt(loopQuestion)
        })

        .then(({ more }) => {
            if (more === true) {
                askQuestion()


            } else {
                console.log("finished!");
                // console.log("employee data " + JSON.stringify(employeeDetails));
                var finalOutput = JSON.stringify(employeeDetails);
                console.log("what is finaloutput " + finalOutput);
                console.log("what is employee name " + employeeDetails[0]);

                return generateHTML({ 
                    ...employeeDetails[0] })
            }
            
        })
        .then((htmlData) => {
            console.log(htmlData)
        

        })
}



function initiatePrompts() {
    return inquirer
        .prompt(employeeQuestions)
        .then(({ name, id, email, role }) => {
          
            if (role === engineer) {
                console.log('Yes, Engineer.')
                return inquirer
                    .prompt(engineerQuestions)
                    .then(({ github }) => {
                        console.log(github);
                        var engineer = new Engineer (name, id, email, github)
                        console.log ("wjat is engineer " + engineer.name, engineer.id, engineer.email, engineer.github);
                        
                        employeeDetails.push({ name, id, email, role, github })
                        // engineerDetails.push(new Employee({username, id, email, title, github});
                        console.log(engineer)
                        console.log("what is employeeDetails? " + JSON.stringify(employeeDetails))

                    })
                
            }
            else if (role === intern) {
                console.log("you're an intern");
                return inquirer
                    .prompt(internQuestions)
                    .then(({ school }) => {
                        console.log(school);
                        var intern = new Intern ( name, id, email, school )
                        employeeDetails.push({ name, id, email, role, school })
                        console.log(intern)


                    })
            }
            else if (role === manager) {
                console.log("you're a manager");
                return inquirer
                    .prompt(managerQuestions)
                    .then(({ officeNumber }) => {
                        console.log(officeNumber);
                        var manager = new Manager ( name, id, email, officeNumber )
                        employeeDetails.push({ name, id, email, role, officeNumber })
                        console.log(manager)

                    })
            }
        })
}

askQuestion()

// module.exports = finalOutput;

