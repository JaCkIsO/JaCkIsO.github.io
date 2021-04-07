"use strict";

// Q1
let person = {
    name: "",
    dateOfBirth: "",

    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
    },
    getDateOfBirth: function(){
        return this.dateOfBirth;
    },
    setDateOfBirth: function(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    },
    toString: function(){
        return `The person's name is ${this.name}\n${this.name} was born on ${this.dateOfBirth.toISOString().substring(0,10)}`;
    }

};

let john = Object.create(person, {name : {value: "John"}, dateOfBirth : {value: new Date(1998,11,10)}})
console.log(john.toString());

// Q2
let employee = {
    salary: 0.0,
    hireDate: Date.now(),
    doJob: function(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary.toLocaleString()}`);
    }
}

employee.prototype = person;

let anna = Object.create(employee, {name: {value: "Anna"}, salary : { value: 249995.50} });
anna.doJob("Programmer");

// Q3
function Person(){
    this.name = "";
    this.dateOfBirth = "";

}
Person.prototype.toString = function(){
    return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.toISOString().substring(0,10)}}`;
}
let peter = new Person();
peter.name = "Peter"
peter.dateOfBirth = new Date(1985, 10, 10);
console.log(peter.toString());

