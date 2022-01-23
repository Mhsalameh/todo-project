"use strict";

let userName;
let userGender="";
let userAge;
let skip;
let genderValid;

userName=prompt("Please enter your name");
while (userGender.toLowerCase()!="male" && userGender.toLowerCase()!="female"){
    userGender=prompt("Please enter you gender\nMale/Female");
    if (userGender==null){
        userGender="";
        break;
    }
}

genderValid = (userGender.toLowerCase() === "male" || userGender.toLowerCase() === "female") ? true : false;
userAge=prompt("How old are you?");
(userAge <= 0) ? alert("Age isn't valid"): userAge=userAge;
skip=confirm("skip welcoming message?");
(skip === false) ? (genderValid === true) ? 
                    (userGender.toLowerCase() === "male") ? alert("Welcome Mr. " + userName) : alert("Welcome Ms. " + userName):
                    alert("Welcome " + userName): skip=skip;


