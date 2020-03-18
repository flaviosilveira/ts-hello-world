interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello" + person.firstName + " " + person.lastName;
}

//let user = "Test User";
//let user = [1, 2, 3];
let person = {firstName: "Test", lastName: "User"};

document.body.textContent = greeter(person);
