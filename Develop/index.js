const inquirer = require("inquirer");
const fs = require("fs").promises;

//const {name: , id, email, officeNumber} = manager;
const engineers = [];
const interns = [];

const staff = [interns, engineers,]

class Manager {
    constructor(name, id, email, officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = officeNumber;
        Manager.prototype.getRole = function () {
          return "Manager"
        }
    }
}
class Engineer {
    constructor(name, id, email, github,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        Engineer.prototype.getRole = function () {
          return "Engineer"
        }
    }
}

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
        Intern.prototype.getRole = function () {
          return "Intern"
        }
    }
}


function managerInput() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter Manager's name",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Manager's employee ID",
          name: "id",
        },
        {
            type:'input',
            message: "Enter Manager's email address",
            name: 'email'
        },
        {
            type: 'input',
            message: "Enter Manager's office number",
            name: 'officeNumber',
        },
      ])
      .then((answers) => {
          Manager = answers;
        // manager.name = answers.name;
        // manager.id = answers.id;
        // manager.email = answers.email
        // manager.officeNumber = answers.officeNumber
        console.log(Manager)

        return nextMember();
    });
}

function nextMember() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Choose an employee",
          name: "next",
          choices: ["Engineer", "Intern", "Finished"],
        },
      ])
      .then((answers) => {
        switch (answers.next) {
          case "Engineer":
            return addEngineer();
  
          case "Intern":
            return addIntern();
  
          default:
            return renderListing();
        }
      });
  }

  function addEngineer() {
    // TODO: prompt user for car properties and create car instance.
    return inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Enter the Engineer's name:",
        },
        {
          name: "id",
          type: "input",
          message: "Enter the Engineer's id:",
        },
        {
          name: "email",
          type: "input",
          message: "Enter the Engineer's email:",
        },
        {
          name: "github",
          type: "input",
          message: "Enter the Engineer's github username:",
        },
      ])
      .then((answers) => {
        engineers.push(
          new Engineer(answers.name, answers.id, answers.email, answers.github)
        );
        return nextMember();
      });
  }
function addIntern() {
    // TODO: prompt user for car properties and create car instance.
    return inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Enter the Intern's name:",
        },
        {
          name: "id",
          type: "input",
          message: "Enter the Intern's id:",
        },
        {
          name: "email",
          type: "input",
          message: "Enter the Intern's email:",
        },
        {
          name: "school",
          type: "input",
          message: "What school did the intern attend?",
        },
      ])
      .then((answers) => {
        interns.push(
          new Intern(answers.name, answers.id, answers.email, answers.school)
        );
        return nextMember();
      });
  }

function renderIntern(intern) {
  return `<div class="card " style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${intern.name}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">${intern.id}</li>
                  <li class="list-group-item">${intern.email}</li>
                  <li class="list-group-item">${intern.school}</li>
                  </ul>
              </div>`;     
      }

function renderEngineer(engineer) {
  return `<div class="card " style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${engineer.name}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">${engineer.id}</li>
                  <li class="list-group-item">${engineer.email}</li>
                  <li class="list-group-item">${engineer.github}</li>
                  </ul>
              </div>`;     
      }

function renderCard(person) {
  // if vehicle type is truck
  switch (person.getRole()) {
    case "Engineer":
      return renderEngineer(person);
    case "Intern":
      return renderIntern(person);

    default:
      return "";
  }
}

function renderHtml(persons) {
  console.log("person", persons);
  const cards = persons.map((person) => renderCard(person));
  console.log("cards", cards);

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
  
      <title>Document</title>
  </head>
  <body>
      <header id="custom_header">
          Your Personalized Team
      </header>
  
      <div class="container">
          <div class="row">
        ${cards.join("")}
        </div>
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
    </html>
  `;
}

const html = renderHtml(staff);
fs.writeFile("./index.html", html, (err) => {
  if (err) {
    console.log(err);
    return;
    0;
  }
  console.log("Success!!");
});


managerInput();
//getOfficeNumber();
//getRole();


module.exports = Manager
  
  