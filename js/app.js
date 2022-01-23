"use strict";

let userName;
let userGender = "";
let userAge;
let skip;
let genderValid;
let answers = ["", "", ""];
let questions = ["Do you like mansaf\nYes/No?", "Do you play games\nYes/No?", "Are these popups annoying\nYes/No?"];

function askName() {
    userName = prompt("Please enter your name");
}
function askGender() {
    while (userGender.toLowerCase() != "male" && userGender.toLowerCase() != "female") {
        userGender = prompt("Please enter you gender\nMale/Female");
        if (userGender == null) {
            userGender = "";
            break;
        }
    }
    genderValid = (userGender.toLowerCase() === "male" || userGender.toLowerCase() === "female") ? true : false;
}

function askQuestions() {
    for (let i = 0; i < 3; i++) {
        while (answers[i].toLowerCase() != "yes" && answers[i].toLowerCase() != "no" && answers[i] != "Invalid") {
            answers[i] = prompt(questions[i])
            checkAnswers(i)
        }
    }
}
function checkAnswers(x) {
    if (answers[x] == null) {
        answers[x] = "Invalid"
    }
}
function printAnswers() {
    for (var i = 0; i < 3; i++) {
        console.log(questions[i] + " " + answers[i]);
    }

}

function askAge() {
    userAge = prompt("How old are you?");
    (userAge <= 0) ? alert("Age isn't valid") : userAge = userAge;
}
function greetingMessage(){
    skip = confirm("skip welcoming message?");
    (skip === false) ? (genderValid === true) ?
        (userGender.toLowerCase() === "male") ? alert("Welcome Mr. " + userName) : alert("Welcome Ms. " + userName) :
        alert("Welcome " + userName) : skip = skip;
}

askName();
askGender();
askAge();
greetingMessage();
askQuestions();
checkAnswers();
printAnswers();