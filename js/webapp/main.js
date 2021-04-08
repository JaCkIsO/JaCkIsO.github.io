"use strict";
import { Person } from "./model/person.js"
import { Employee } from "./model/employee.js"

// Q1
const anna = new Person("Anna Smith", new Date(1998,11,15))
const bob = new Person("Bob Jone", new Date(1945,10,16))
const carlos = new Person("Carlos Slim Helu", new Date(1976,8,24))

let persons = [anna,bob,carlos]
persons.forEach(person => console.log(person.toString()))

// Q2
const emp = new Employee("Jim Hanson");
emp.setSalary(245990.00 );

emp.doJob("Software Enginner");
