
class School {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    
    }

    school = "Latha 1";
    city = "Yangon";

    static number = 2;

    SchoolName(){
        return `School name is ${this.school}`
    }
    CityName(){
        return `City Name is ${this.city}`
    }
}

console.log(School.number)

const Latha1 = new School("Htun Htun",24,"male");

console.log(Latha1)


class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        // console.log(`Hello ${this.name}`);
        return `Hello ${this.name}`;
    }
}

class Student extends Person{};

let personOne = new Person("Than Htike Aung");

let studentOne = new Student("Bo Than");