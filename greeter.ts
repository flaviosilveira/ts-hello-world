class Student{
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string){
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello" + person.firstName + " " + person.lastName;
}

//let user = "Test User";
//let user = [1, 2, 3];

//let person = {firstName: "Test", lastName: "User"};
let student = new Student("first", "middle", "last");

document.body.textContent = greeter(student);
