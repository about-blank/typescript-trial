interface IAddress {

    line1 : string;
    line2 : string;
    city : string;
    state : string;
    zipcode : number;
}

interface IActions {

    add() : boolean;
    delete() : boolean;
}

class Employee implements IActions {

    //Access specifiers
    // private, readonly, protected, default is public
    // for angular usually all the requred ones are kept public as they are required by the view.

    public id : number;
    private name : string;
    private _designation : string;
    protected age : number;
    readonly dob : Date;
    address : IAddress;


    constructor(id: number) {
        this.id = id;
        this.name = "Vishal";
        this._designation = "Technical Architect";
        this.age = 31;
        this.dob = new Date('10-nov-2017');
    } 


    getName() {
        return this.name;
    }


    //For es5 & higher we can specify getter and setters in the below style.
    get designation() : string {
        return this._designation;
    }

    set designation(newDesignation : string) {
        this._designation = newDesignation;
    }

    // get empName() {
    //             return this.name;
    // }

    add() : boolean {
        console.log("Add called ...");
        return true;
    }  

    delete() : boolean {
        console.log("Delete called ...");
        return true;
    }

}

let emp : Employee;

emp = new Employee(1);

//The below line will give runtime error.
//emp.address.city = "Mumbai";


console.log(emp);
console.log(emp.id);
console.log(emp.getName());
console.log(emp.designation);

emp.add();
emp.delete();
