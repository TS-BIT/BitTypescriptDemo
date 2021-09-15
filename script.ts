//Operatoriai


//let firstName = "Jonas";
let firstName: string;
firstName = "5";


let firstName1: string;
firstName1 = "5";

let ids: number = [1, 2, 3, 4, 5];

let foo = undefined;
// console.log(foo.bar.baz()); // Uncaught TypeError: Cannot read property 'bar' of undefined
// console.log(foo?.bar.baz()); // print undefined

let something = foo?.bar.baz();
if (something) {
    console.log("Something is defined");
} else {
    console.log("Something is undefined");
}

// Funkcijos

{
    "compilerOptions": {
        "target": "es6",
        "rootDir": ".\\",
        "outDir": ".\\js",
        "noImplicitAny": true,
        "noImplicitThis": true,
        "noEmitOnError": true
    }
}
const add = (n1: string, n2: string): string => {
    return n1 + n2;
}

// fname = (paramName: paramType): returnType => {}


// Tipų union'ai

let someVariable: boolean | number;
someVariable = 10;
// someVariable = true;
console.log(someVariable.toString(2))

let anyType: any;
anyType = true;
console.log(anyType.valueOf())

const getAllEven = (numbers: number[]): number | number[] => {
    // .. complex logic
    return 5;
}

// Klasės

class Person {

    name: string;
    surname: string;
    age: number;
    grades: number[];

    constructor(name: string, surname: string, age: number, grades: number[]) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.grades = grades;
    }

    getTotalNameLenght(): number {
        return this.name.length + this.surname.length;
    }

    getGradesAverage(): number {
        let sumOfGrades = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sumOfGrades += this.grades[i]
        }
        return sumOfGrades / this.grades.length;
    }
}

let people: Person[] = [
    new Person("Mindaugas", "Klozaitis", 152, [10, 5, 8]),
    new Person("Jonas", "Petrikas", 123, [8, 7, 9])
]

// raw objects / object literals ...alternatyvi reprezentacija duomenų kompiuteryje:
let mindaugas = { name: "Mindaugas", surname: "Kaubojus", age: 51, grades: [5, 10, 8, 10, 3] }

// ... benefits of using classes?
// ... - no need to write field names all the time: name: x, surname: y ... 
// ... - everything is represented as a logial unit - all information and methods belonging to Person (getGradesAverage and gardes)
// ... - typescript benefits: raw objects do not have types.

let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age
}

console.log(`These people have combined ${totalAge} years of life experience, the average age: ${totalAge / people.length}`);

people.forEach(person => console.log(`${person.name} grades average is: ${person.getGradesAverage()}`))



// SQ: why do we need static methods?
class Calculator {
    static add(i: number, j: number): number {
        return i + j;
    }

    static subtract(i: number, j: number): number {
        return i - j;
    }
}

// ... when using static methods we have class as a container for functions
// ... static methods belong to class, not to the object created from that class
// ... so we don't need to create the object to use the methods! But we still
// ... reveive benefits form inproved autocomplete, readability, understability
console.log(Calculator.subtract(8, 5));



