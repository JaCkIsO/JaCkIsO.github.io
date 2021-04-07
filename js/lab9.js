"use strict";

// Q1
let person = {
    name: "",
    dateOfBirth: "",

    getName(){
        return this.name;
    },
    setName(name){
        this.name = name;
    },
    getDateOfBirth(){
        return this.dateOfBirth;
    },
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    },
    toString(){
        return `The person's name is ${this.name}\n${this.name} was born on ${this.dateOfBirth.toISOString().substring(0,10)}`;
    }

};

let john = Object.create(person, {name : {value: "John"}, dateOfBirth : {value: new Date(1998,11,10)}})
console.log(john.toString());

