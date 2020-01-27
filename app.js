const fs = require('fs');
const inquirer = require("inquirer");
const generateHTML = require('./generateHTML');
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const htmlFunctions = require('./create')


var employeeDetails = [];

const validateManager = async (role) => {
    if (role === manager || role === 'manager') {
        return true;
    }
    else {
        return 'You must be the Manager to continue';
    }
};

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
        name: "role",
        message: "What is your role?",
        validate: validateManager,
    },
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
let html = []
function startQuestions() {
    return inquirer
        .prompt(managerQuestions)
        .then(({ role, name, id, email, officeNumber }) => {
            var manager = new Manager(name, id, email, officeNumber)
            // employeeDetails.push({ role, name, id, email, officeNumber })
            //             var toPrepand = `<div class="card text-center managerCard">
            // <div class="card-header" style="background-color: rgb(91, 201, 238);">
            //  <h1>${manager.getRole()}</h1></div> <div class="card-body"><p class="card-text">
            //     <div class="line"><strong>Name:</strong> ${manager.name}</div> <br>
            //     <div class="line"> <strong>ID:</strong>${manager.id} </div> <br>
            //     <div class="line"><strong>Email:</strong>  ${manager.email}</div> <br>
            //     <div><strong>Office Number:</strong>${manager.officeNumber} </div></p> </div> </div>`;

            // var result = data.replace(/\<\/body>/g, toPrepand + '</body>');

            var toPrepandManager = createManagerHTML(manager);
            html.push(toPrepandManager)
            console.log("what is html now? " + html)

            fs.appendFile('./templates/manager.html', toPrepandManager, 'utf8', (error) => {
                return error
            });
        })
        .then(() => {
            return inquirer.prompt(loopQuestion)
        })
        .then(({ more }) => {
            if (more === true) {
                askQuestion()


            } else {
                buildTeam();
                console.log("finished!");
            }

        })

}

function askQuestion() {
    initiatePrompts()
        .then(() => {
            return inquirer.prompt(loopQuestion)
        })
        .then(({ more }) => {
            if (more === true) {
                askQuestion()
            } else {
                buildTeam();
                console.log("finished!");
                // var finalOutput = JSON.stringify(employeeDetails);
            }
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
                        var toPrepandEngineer = createEngineerHTML(engineer);
                        html.push(toPrepandEngineer)
                        console.log("what is html now? " + html)

                        fs.appendFile('./templates/engineer.html', toPrepandEngineer, 'utf8', (error) => {
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

                        var toPrepandIntern = createInternHTML(intern);
                        html.push(toPrepandIntern)
                        console.log("what is html now? " + html)

                        fs.appendFile('./templates/intern.html', toPrepandIntern, 'utf8', (error) => {
                            return error
                        });



                    })
            }

        })
}

function buildTeam() {
    // append this to main. html
    var allContent = html.join()
    // console.log("waht is all content? " + allContent)
    // console.log("what is html at the end? " + html);

    fs.appendFile('./templates/main.html', allContent, 'utf8', (error) => {
        return error
    });

    // append closing tags

    var footer = ` <footer class = "footer">
    <div class="card-footer text-muted">
       Employee Template Engine <br>
       Copyright ©2020

     </div>
  </footer>


</body></html>`;


    fs.appendFile('./templates/main.html', footer, 'utf8', (error) => {
        return error
    });





    // 1. handlebar
    // 2. homegrown Regex ( Sam does nto recommend)
    // 3. create function to generate html


}

const createManagerHTML = (manager) => {

    return `<div class="card text-center managerCard">
    <div class="card-header" style="background-color: rgb(91, 201, 238);">
     <h1>${manager.getRole()}</h1></div> <div class="card-body"><p class="card-text">
        <div class="line"><strong>Name:</strong> ${manager.name}</div> <br>
        <div class="line"> <strong>ID:</strong>${manager.id} </div> <br>
        <div class="line"><strong>Email:</strong>  ${manager.email}</div> <br>
        <div><strong>Office Number:</strong>${manager.officeNumber} </div></p> </div> </div>`;

}

const createEngineerHTML = (engineer) => {
    return `<div class="card internCard" style="width: 30rem;">
<div class="card-header" style="background-color: rgb(91, 238, 182);">
   <h1>${engineer.getRole()}</h1></div> <div class="card-body">
   <p class="card-text">
      <div class="line"><strong>Name:</strong> ${engineer.name}</div> <br>
      <div class="line"> <strong>ID:</strong> ${engineer.id}</div> <br>
      <div class="line"><strong>Email:</strong> ${engineer.email}</div> <br>
      <div><strong>Github Name:</strong>  ${engineer.github}</div></p></div> </div>`

}

const createInternHTML = (intern) => {
    return `<div class="card engineerCard" style="width: 30rem;">
<div class="card-header" style="background-color: rgb(184, 91, 238);">
   <h1>${intern.getRole()}</h1> </div><div class="card-body">
   <p class="card-text">
      <div class="line"><strong>Name:</strong> ${intern.name}</div> <br>
      <div class="line"> <strong>ID:</strong> ${intern.id}</div> <br>
      <div class="line"><strong>Email:</strong> ${intern.email}</div> <br>
      <div><strong>School:</strong> ${intern.school}</div></p></div></div>`


}


startQuestions()

