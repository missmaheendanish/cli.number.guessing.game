#! /user/bin/env node

import inquirer from "inquirer";

// 1. computer will generate a random number

// 2. user input for guessing number

// 3. computer user input with computer generate number and show result - done

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

const answers = await inquirer.prompt([
    {
       name: "userGuessedNumber",
       type: "number",
       message: "please guess a number between 1-10: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
console.log("congratulations! you gussed right number.")
}else{
    console.log("you guessed wrong number.")
}