class Human {
    constructor(Name) {
        this.Name = Name;
    }
    gethello() {
        return `Hello ${this.Name}`;
    }
    getintro() {
        return `Hello Everyone,My Name is ${this.Name}`;
    }
}
let human_obj = new Human("Devendra");
console.log(human_obj);
console.log(human_obj.getintro());

let another_human_obj = new Human("XYZ");
console.log(another_human_obj);
console.log(another_human_obj.getintro());

class Student extends Human {
    constructor(Name,Batch,Role) {
        super(Name);
        this.Batch = Batch;
        this.Role = Role;
    }
    getintro() {
        return `Hello Everyone,My Name is ${this.Name} and my batch name is ${this.Batch} and my role is ${this.Role}.`;
    }
}
let student_obj = new Student("Devendra","Full Stack Developer","Student");
console.log(student_obj);
console.log(student_obj.getintro());

class Educator extends Student {
    constructor(Name,Batch,Role){
        super(Name,Batch,Role)
    }
    getintro() {
        return `Hello Everyone,My Name is ${this.Name} and my batch name is ${this.Batch} and my role is ${this.Role}.`;
    }
}
let educator_obj = new Educator("ÄBCD","Full stack Developer","Teacher");
console.log(educator_obj);
console.log(educator_obj.getintro());