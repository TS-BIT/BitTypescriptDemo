//let firstName = "Jonas";
let firstName: string;
firstName = 5;

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

