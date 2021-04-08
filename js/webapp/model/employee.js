
"use strict";

import {Person} from "./person.js"

export class Employee extends Person{

    constructor(name){
        super(name);
    }

    getSalary(){
        return this.salary;
    }
    getHireDate(){
        return this.hireDate;
    }
    setSalary(newSalary){
        this.salary = newSalary;
    }
    setHireDate(hireDate){
        this.hireDate = hireDate;
    }

    doJob(jobTitle){
        console.log(`${this.getName()} is a ${jobTitle} who earns $${this.getSalary().toLocaleString()}`);
    }

}