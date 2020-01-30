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
}

function validateName(name) {
    return name !== "";

}

function validateID(id) {
    var reg = /^\d{3}$/;
    return reg.test(id) || "ID should be 3 numbers!";
}

function validatePhone(officeNumber) {
    var reg = /^\d{5}$/;
    return reg.test(officeNumber) || "needs to be 5 numbers long!";
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
        type: "list",
        name: "role",
        message: "What is employee's role?",
        choices: [
            engineer,
            intern,
        ],
    },
    {
        type: "input",
        name: "name",
        message: "What is employee's name?",
        validate: validateName,
    },
    {
        type: "input",
        name: "id",
        message: "What is employee's ID?",
        validate: validateID,
    },

    {
        type: "input",
        name: "email",
        message: "What is employee's email?",
        validate: ValidateEmail,
    },
   
];


const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is employee's Github username?"
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
        message: "What school does intern go to?"
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
    var beginHTML = generateHTML()
    
    fs.writeFile("./templates/main.html", beginHTML,function(err) {

        if (err) {
          return console.log(err);
        }

      
      });


    return inquirer
        .prompt(managerQuestions)
        .then(({ role, name, id, email, officeNumber }) => {
            var manager = new Manager(name, id, email, officeNumber)
        

           
            var toPrepandManager = htmlFunctions.manager(manager);
            html.push(toPrepandManager)
      

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
                        var toPrepandEngineer = htmlFunctions.engineer(engineer);
                        html.push(toPrepandEngineer)

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
                        
                        var toPrepandIntern = htmlFunctions.intern(intern);
                        html.push(toPrepandIntern)

                        fs.appendFile('./templates/intern.html', toPrepandIntern, 'utf8', (error) => {
                            return error
                        });



                    })
            }

        })
}

function buildTeam() {
    var allContent = html.join('') 
    fs.appendFile('./templates/main.html', allContent, 'utf8', (error) => {
        return error
    });

    // append closing tags and footer

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

}

startQuestions()

