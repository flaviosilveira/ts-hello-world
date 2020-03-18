function greeter(person: String) {
    return "Hello" + person;
}

let user = "Test User";
//let user = [1, 2, 3];

document.body.textContent = greeter(user);