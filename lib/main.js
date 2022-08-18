"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = [
    { id: '123', name: 'Joe', age: 30, friends: [] },
    { id: '143', name: 'Jane', age: 57, friends: [] },
    { id: '345', name: 'Karl', age: 42, friends: [] },
    { id: '654', name: 'Shirley', age: 19, friends: [] },
];
/**
 * This function will take an array of people, loop through it, for each person, grab the name; return an array of just the names.
 */
function getNames(inputArray) {
    let result = [];
    for (let person of inputArray) {
        result.push(person.name);
    }
    return result;
}
let result = getNames(people);
console.log(result); // This should be an array like ['Joe', 'Jane', 'Karl', 'Shirley']
