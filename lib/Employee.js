var userData = {};

userData.Manager = new Employee();
userData.Intern = new Employee();
userDate.Engineer = new Employee();

var Employee = function (){
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.getName() = name;
    this.getEmail() = email;
    this.getRole() = "Employee";
   
}

Employee.prototype.officeNumber = function() {
    if (this.role === Manager) {
        this.officeNumber = officeNumber;
        this.getRole() = "Manager";
    }
}

Employee.prototype.gitHub = function() {
    if (this.role === Engineer) {
        this.github = this.github;
        this.getRole() = "Engineer";
    }
}

Employee.prototype.school = function() {
    if (this.role === Intern) {
        this.school = school;
        this.getRole() = "Intern"
    }
}


