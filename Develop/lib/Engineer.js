class Engineer {
    constructor(name, id, email, github,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}


Engineer.prototype.getRole = function () {
    return "Engineer"
}

    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    e.getRole();
    
    
    
module.exports = Engineer