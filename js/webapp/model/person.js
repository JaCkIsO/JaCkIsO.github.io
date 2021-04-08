"use strict";

export class Person {

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }
    toString(){
        return `The person's name is ${this.getName()}\n${this.getName()} was born on ${this.getDateOfBirth().toISOString().substring(0,10)}`;
    }
}