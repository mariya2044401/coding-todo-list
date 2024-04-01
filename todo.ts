#! /usr/bin/env node
import inquirer from "inquirer"

let todos =[]
let condition =false
while(condition){
let addTask = await inquirer.prompt([{
    name: "todo",
    type: "input",
    message : "what do you want to add in your Todos?",

},
{
    name: "addMore",
    type: "confirm",
    message: "Do you want to add more?",
    default: "false"
}
])
// console.log(addTask.todo)
todos.push(addTask.todo)
condition = addTask.addMore
console.log(todos)


}