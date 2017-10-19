
//Type-Check  -  Type Safety
let lName0: string;
lName0 = "Aroor";
//lName = 1;


let age0: number;
age0 = 37;


let isValid0: boolean = true;
console.log("isValid = " + isValid0);


let anyTypeVar0;
anyTypeVar0 = "Vishal";
console.log("anyTypeVar = " + anyTypeVar0);
anyTypeVar0 = 1;
console.log("anyTypeVar = " + anyTypeVar0);
anyTypeVar0 = false;
console.log("anyTypeVar = " + anyTypeVar0);

let unionDataType0: string | number;

unionDataType0 = "Vishal";
console.log("unionDataType = " + unionDataType0);
unionDataType0 = 999;
console.log("unionDataTyp = " + unionDataType0);



let anyObjectsArray0 = [];

//two different styles of declaration/definition
let names: Array<string> = new Array<string>();
let names2 = new Array<string>();

anyObjectsArray0.push({ id: 1, name: "Vishal", age: 37, city: "Bangalore" });

anyObjectsArray0.push(
    { id: 1, name: "Manasa", age: 32, city: "Bangalore" },
    { id: 1, name: "Pingu", age: 3, city: "Bangalore" },
    { id: 1, name: "Padma", age: 65, city: "Mumbai" });


    anyObjectsArray0.push(
    "Random-String-1",
    99999,
    false);

//for-of

console.log("\n\n\nUsing 'for-of' -----------------------");
for(let obj of anyObjectsArray0) {
    console.log("obj datatye = " + typeof(obj));
    if(typeof(obj) === "object") {
        console.log("obj = " + JSON.stringify(obj));
    }
    else {
        console.log("obj = " + obj);
    }
}
console.log("----------------------- done using 'for-of'");


console.log("\n\n\nUsing 'for-in' -----------------------");
for(let idx in anyObjectsArray0) {
    console.log("idx = " + idx);
    console.log("anyObjectsArray[idx] datatye = " + typeof(anyObjectsArray0[idx]));
    if(typeof(anyObjectsArray0[idx]) === "object") {
        console.log("anyObjectsArray[idx] = " + JSON.stringify(anyObjectsArray0[idx]));
    }
    else {
        console.log("obj = " + anyObjectsArray0[idx]);
    }
}
console.log("----------------------- done using 'for-in'");



console.log("\n\n\nUsing 'forEach' -----------------------");
anyObjectsArray0.forEach(function(obj){
    console.log("obj datatye = " + typeof(obj));
    if(typeof(obj) === "object") {
        console.log("obj = " + JSON.stringify(obj));
    }
    else {
        console.log("obj = " + obj);
    }
});
console.log("----------------------- done using 'forEach'");


console.log("\n\n\nUsing 'filter' - part - 1 -----------------------");
let newArray0 = anyObjectsArray0.filter(function(obj) { if(typeof(obj) === "object" && obj.age > 30) {return obj} });
newArray0.filter(function(obj) {
    if(typeof(obj) === "object" && obj.age> 30) {
       
        console.log("newArray0 - obj datatye = " + typeof(obj));
        if(typeof(obj) === "object") {
            console.log("newArray0 - obj = " + JSON.stringify(obj));
        }
        else {
            console.log("newArray0 - obj = " + obj);
        }
        }
});
console.log("----------------------- done using 'filter'  - part - 1 ");



console.log("\n\n\nUsing 'filter' - part - 2 -----------------------");
anyObjectsArray0.filter(function(obj) {
    if(typeof(obj) === "object" && obj.age> 30) {
       
        console.log("newArray0-0 - obj datatye = " + typeof(obj));
        if(typeof(obj) === "object") {
            console.log("newArray0-0 - obj = " + JSON.stringify(obj));
        }
        else {
            console.log("newArray0-0 - obj = " + obj);
        }
        }
});
console.log("----------------------- done using 'filter' - part - 2 ");


console.log("\n\n\nUsing 'filter with lambda expression' -----------------------");
var newArray = anyObjectsArray0.filter((obj) => typeof(obj) === "object" && obj.age > 30);
newArray.forEach(function(obj){
    console.log("newArray - obj datatye = " + typeof(obj));
    if(typeof(obj) === "object") {
        console.log("newArray - obj = " + JSON.stringify(obj));
    }
    else {
        console.log("newArray - obj = " + obj);
    }
});
console.log("----------------------- done using 'filter with lambda expression'");

console.log(newArray);



class Greeter {
    static standardGreeting = "Hello, there";
    greeting : string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}


let greeter1: Greeter;
greeter1 = new Greeter();
console.log("greeter1 : " + greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log("greeter2 : " + greeter2.greet());
console.log("greeter1 : " + greeter1.greet());

let greeter0 : Greeter = new Greeter();
greeter0.greeting = "Visha0";
console.log("greeter0 : " + greeter0.greet());


interface IAddress { 

    line1 : string;
    line2 : string;
    city : string;
    state : string;
    zipCode : number;
}

interface IEmployeeActions {

    add(emp: Employeee) : boolean;
    delete(id: number) : boolean;
    update(emp: Employeee) : boolean;
}

class EmployeeManagementSystem implements IEmployeeActions {

    add(emp: Employeee): boolean {
        
                let result : boolean = true;
                console.log("add method called !!");
                return result;
                // throw new Error("Method not implemented.");
            }
        
            delete(id: number): boolean {
                let result : boolean = true;
                console.log("delete method called !!");
                return result;
                // throw new Error("Method not implemented.");
            }
            update(emp: Employeee): boolean {
                let result : boolean = true;
                console.log("update method called !!");
                return result;
                // throw new Error("Method not implemented.");
            }
        
}

class Employeee {

 
    id : number;
    private name : string;
    private _designation : string; 
    dob : Date;
    address : IAddress;

    constructor(id : number) {
        this.id = id;
        this._designation = "not-assigned !!";
        // this.address.line1 = "B-706 Purva Panorama";
    }
    
    getName() {
        return this.name;
    }

    get designation() : string {
        return this._designation;
    }

    set designation(newDesignation : string) {

        this._designation = newDesignation;
    }

}

let ems : EmployeeManagementSystem = new EmployeeManagementSystem();

let emp00 : Employeee = new Employeee(1);
//let emp200 : Employeee = new Employeee(2);
console.log(JSON.stringify(emp00));
emp00.designation = "Technical Architect";
console.log(JSON.stringify(emp00));

ems.add(emp00);
ems.delete(999);
ems.update(emp00);
