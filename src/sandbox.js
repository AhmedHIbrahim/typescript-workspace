"use strict";
// lesson - 1
function lesson_1() {
    const character = "mario";
    console.log(character);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        console.log(input);
    });
    // tsc sandbox.ts sandbox.js
    // tsc sandbox.ts  // --if the file names are same
    // tsc sandbox.ts -w // -w to watch for changes without recompiling it
}
// lesson - 2
function lesson_2() {
    let comment = "it is a comment";
    let isSigned = false;
    let age = 16;
    //comment = 0
    comment = "update comment";
    //isSigned = 0
    isSigned = true;
    //age = ""
    age = 18;
    const circ = (dimetar) => {
        return dimetar * Math.PI;
    };
    //console.log(circ("hi world"));
    console.log(circ(5));
}
// Arrays and Objects
function lesson_3() {
    let uiq = [2, 2, 3, 6];
    uiq.push(2.5);
    //uiq.push("a");
    //uiq.push(true);
    let mixed = ["a", 2.5, false];
    mixed.push(2.5);
    mixed.push("a");
    mixed.push(true);
    let user = {
        name: "Dragon",
        age: 25,
        skills: [],
    };
    user.name = "Van";
    //user.name = 5
    //user.job = "Scintist"
}
function lesson_4() {
    // explicit types
    let char;
    let age;
    let isLoggedIn;
    //age = "50"
    age = 50;
    //arrays
    let users;
    let ids = [];
    //users.push({})
    ids.push("a1");
    // union types
    let mixed = [];
    mixed.push(5);
    mixed.push("5");
    //mixed.push(true)
    let uid;
    uid = "a1";
    uid = 1;
    //uid = false
    //objects
    let user;
    user = { name: "Han" };
    user = [];
    let user1;
    user1.name = "a";
    //user1.uid='a'
    //user1.active='a'
    //user1 = {}
}
// Dynamic (any) Types
function lesson_5() {
    //
    let age = 24;
    age = true;
    age = "25";
    age = {};
    //
    let mixed = [];
    mixed.push(5);
    mixed.push("5");
    mixed.push({});
    mixed.push(true);
    //
    let user;
    user = { name: "a", age: 5 };
    user = { name: 5, age: "5" };
}
// Better Workflow & tsconfig
function lesson_6() {
    /*
     * place .html,.js,.css in /public
     * place .ts in /src
     *
     * tsc --init
     *
     * change
     */
}
