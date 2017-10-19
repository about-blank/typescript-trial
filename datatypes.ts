//Any data type (data type not specified). In this case we can set value of any type to it.
let anyTypeVar;
anyTypeVar = "Vishal";
console.log("anyTypeVar = " + anyTypeVar);
anyTypeVar = 1;
console.log("anyTypeVar = " + anyTypeVar);
anyTypeVar = false;
console.log("anyTypeVar = " + anyTypeVar);


//String
let lname : string = "Aroor";
console.log("lname = " + lname);

//number
let age : number;
//below line will give error as age is of type number and we can't assign string value to it.
//age = "37";   
age = 37;


console.log("age = " + age);

//boolean (default value is undefined)
let isValid : boolean = false;
let isCold : boolean = false;
console.log("isValid = " + isValid);
console.log("isCold = " + isCold);

//union of two or more types
let unionType : string | number;
unionType = "Vishal";
console.log("unionType (string) : " + unionType);
unionType = 44;
console.log("unionType (number) : " + unionType);

//Array
let students= [];  //Can contain any kind of items
let students2= [];  //Can contain any kind of items
//Either of two style of declartion + definition can be used.
let studentList : Array<string> = new Array<string>();  // will take only string items
//let studentList = new Array<String>();
//Either of two style of declartion + definition can be used.
// let yearList : Array<number> = new Array<number>();
let yearList = new Array<number>();

students.push (

    {
        id : 9,
        name : 'Vishal',
        address : 'mumbai'
    },
    "Manasa",
    3,
    false,
    {
        id : 1,
        name : 'Manjunatha',
        address : 'mumbai'
    }
);


students2.push (

    {
        id : 1,
        name : 'Vishal',
        address : 'mumbai'
    },
    "Manasa",
    3,
    false,
    {
        id : 3,
        name : 'Manjunatha',
        address : 'mumbai'
    }
);

studentList.push("Vishal");
studentList.push("Manasa");
studentList.push("Pingu");
studentList.push('Padma', 'Manjunatha');

yearList.push(2017);
yearList.push(2018);
yearList.push(2019);
yearList.push(2020);



//for of (typescript) -- gives value
for(let student of students) {

    console.log("for-of loop : student = " + student);
}


//for in (typescript) -- gives index.
for(let student in students) {
    console.log("for-in loop : student = " + student);
}


//javascript's foreach
students.forEach(function(student) {

console.log("foreach loop : student = " + student);
});


//javascript's foreach
studentList.forEach(function(student) {
    
    console.log("foreach loop : studentList = " + student);
});
    
    

//filter
students2.filter(function(student) {
    if(typeof(student) === "object" && student.id > 2) {
        console.log("student-filder = " + student);
    }
});


//lambda expression ... in this case newStudends is a new array which contains studends with id > 2
let newStudents = students2.filter((student) => typeof(student) === "object" && student.id > 2);
for(let student in newStudents) {
    console.log("for-in - student-filter-lambda = " + student);
}
