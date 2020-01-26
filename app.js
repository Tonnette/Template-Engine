const fs = require('fs');
const inquirer = require("inquirer");
const generateHTML = require('./generateHTML');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')


var employeeDetails = [];

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
                // var finalOutput = JSON.stringify(employeeDetails);
              
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
                return inquirer
                    .prompt(engineerQuestions)
                    .then(({ github }) => {
                        var engineer = new Engineer(name, id, email, github)
                            var toPrepand =`<div class="card internCard" style="width: 30rem;">
                            <div class="card-header" style="background-color: rgb(91, 238, 182);">
                               <h1>${engineer.getRole()}</h1></div> <div class="card-body">
                               <p class="card-text">
                                  <div class="line"><strong>Name:</strong> ${engineer.name}</div> <br>
                                  <div class="line"> <strong>ID:</strong> ${engineer.id}</div> <br>
                                  <div class="line"><strong>Email:</strong> ${engineer.email}</div> <br>
                                  <div><strong>Github Name:</strong>  ${engineer.github}</div></p></div> </div>`

                            fs.appendFile('./templates/main.html', toPrepand, 'utf8', (error) => {
                                return error
                            });     
                    });
            }
            else if (role === intern) {
                return inquirer
                    .prompt(internQuestions)
                    .then(({ school }) => {
                        var intern = new Intern(name, id, email, school)
                        employeeDetails.push({ name, id, email, role, school })
                            var toPrepand = `<div class="card engineerCard" style="width: 30rem;">
                                <div class="card-header" style="background-color: rgb(184, 91, 238);">
                                   <h1>${intern.getRole()}</h1> </div><div class="card-body">
                                   <p class="card-text">
                                      <div class="line"><strong>Name:</strong> ${intern.name}</div> <br>
                                      <div class="line"> <strong>ID:</strong> ${intern.id}</div> <br>
                                      <div class="line"><strong>Email:</strong> ${intern.email}</div> <br>
                                      <div><strong>School:</strong> ${intern.school}</div></p></div></div>`

                            // var result = data.replace(/\<\/body>/g, toPrepand + '</body>');

                            fs.appendFile('./templates/main.html', toPrepand, 'utf8', (error) => {
                                return error
                            });
                    


                    })
            }
            else if (role === manager) {
                return inquirer
                    .prompt(managerQuestions)
                    .then(({ officeNumber }) => {
                        var manager = new Manager(name, id, email, officeNumber)
                        employeeDetails.push({ name, id, email, role, officeNumber })
                        var toPrepand = `<div class="card text-center managerCard">
      <div class="card-header" style="background-color: rgb(91, 201, 238);">
         <h1>${manager.getRole()}</h1></div> <div class="card-body"><p class="card-text">
            <div class="line"><strong>Name:</strong> ${manager.name}</div> <br>
            <div class="line"> <strong>ID:</strong>${manager.id} </div> <br>
            <div class="line"><strong>Email:</strong>  ${manager.email}</div> <br>
            <div><strong>Office Number:</strong>${manager.officeNumber} </div></p> </div> </div>`;

                        // var result = data.replace(/\<\/body>/g, toPrepand + '</body>');

                        fs.appendFile('./templates/main.html', toPrepand, 'utf8', (error) => {
                            return error
                        });


                    })



            }
        })
}

askQuestion()


