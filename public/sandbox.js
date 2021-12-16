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
    //user1.name = "a";
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
     * -- change the keys in tsconfig.json as following
     *
     * {
     * "compilerOptions": {
     *     ....
     *     "rootDir": "src"
     *     "outDir": "public"
     * },
     * "include": ["src"] // to avoid compiling other ts files outside of src folder
     * }
     *
     * tsc --watch
     *
     */
}
// Function Basics
function lesson_7() {
    let greet;
    let sum;
    let divide;
    greet = () => {
        console.log("hello");
    };
    function add(a, b, c) {
        console.log(a + b);
    }
    add(5, 5);
    add(5, 5, 5);
    add(5, 5, "5");
    divide = (a, b, c = 4) => {
        console.log(a / b);
        return a / b;
    };
}
function lesson_8() {
    const greet = (name) => {
        console.log(name);
    };
    const greatUser = (user) => {
        console.log(user.name);
    };
}
// Function Signatures
function lesson_9() {
    // example-1
    let greet;
    greet = (name, greeting) => {
        console.log(`${greeting} ${name}`);
    };
    // example-2
    let calc;
    calc = (num1, num2, action) => {
        if (action === "add") {
            return num1 + num2;
        }
        return num1 - num2;
    };
    // example-3
    let logDetails;
    logDetails = (user = { name: "ananyom", age: -1 }) => console.log(`${user.name} is ${user.age} years old`);
}
// The Dom & Type Casting
function lesson_10() {
    // example - 1
    const anchor = document.querySelector("a");
    if (anchor) {
        console.log(anchor.href);
    }
    // or
    console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
    // or add ! to tell ts that <a> is existing for sure
    const anchor2 = document.querySelector("a");
    console.log(anchor2.href);
    // example - 2
    const form = document.querySelector("form");
    // ==> form type is HTMLFormElement
    const form1 = document.querySelector(".form");
    // ==> form1 type is HTMLFormElement | null
    //const form2 = document.querySelector(".new-item-form")!;
    // ==> form2 type is Element
    //const form3 = document.querySelector(".new-item-form") as HTMLFormElement;
    // ==> form3 type is HTMLFormElement
    //console.log(form3.children);
    // inputs
    const type = document.querySelector("#type");
    const toFrom = document.querySelector("#toFrom");
    const details = document.querySelector("#details");
    const amount = document.querySelector("#amount");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(type.value, " ", toFrom.value, " ", details.value, " ", amount.valueAsNumber);
    });
}
// Classes
function lesson_11() {
    // classes
    class Invoice {
        constructor(c, d, a) {
            this.client = c;
            this.details = d;
            this.amount = a;
        }
        format() {
            return `${this.client} owes ${this.amount} for ${this.details}`;
        }
    }
    const inv1 = new Invoice("mario", "website work", 250);
    const inv2 = new Invoice("Loi", "Home Stuff", 28);
    let invoices = [];
    invoices.push(inv1);
    //invoices.push("inv1");
    invoices.push(inv2);
    inv1.amount = 500;
    inv2.client = "ali";
    console.log(invoices);
}
//  Public, Private & Readonly -- CLASSES
function lesson_12() {
    // ***** PART-2 **** <=fast constructor
    class Invoicer {
        constructor(name, uid, collected) {
            this.name = name;
            this.uid = uid;
            this.collected = collected;
        }
        getInvoice(invoice) {
            console.log(`${this.name} has collected => ${invoice.format()}`);
            this.collected++;
        }
    }
    // **** PART-1 ****
    // classes
    class Invoice {
        constructor(c, d, a) {
            this.client = c;
            this.details = d;
            this.amount = a;
        }
        format() {
            return `${this.client} owes ${this.amount} for ${this.details}`;
        }
    }
    const inv1 = new Invoice("mario", "website work", 250);
    const inv2 = new Invoice("Loi", "Home Stuff", 28);
    let invoices = [];
    invoices.push(inv1);
    //invoices.push("inv1");
    invoices.push(inv2);
    inv1.amount = 500;
    // inv2.client = "ali"; <== accessible (readonly)
    // inv2.details = "ali"; <== not accessible (private)
    invoices.forEach((inv) => console.log(inv.format()));
}
// Modules
function lesson_13() {
    /*
   in index.html add type='module'
   <script type="module" src="app.js"></script>
  
   then add Invoice class to /classes/Invoice.ts
   export Invoice {...}
   -
   Import {Invoice} from 'path/file.js'
   */
}
// Interfaces
function lesson_14() {
    /*
    Interface is only a feature in ts, is not in js
    */
    const user1 = {
        name: "ah",
        age: 25,
        speak(text) {
            console.log(text);
        },
        spend(amount) {
            console.log("I spent ", amount);
            return amount;
        },
    };
    let user2;
    const greetPerson = (person) => {
        console.log("hello ", person.name);
    };
    greetPerson(user1);
}
// Interfaces with classes
function lesson_15() {
    // import { Invoice } from "./classes/Invoice.js";
    // import { Payment } from "./classes/Payment.js";
    // import { HasFormatter } from "./interfaces/HasFormatter";
    // let doc1: HasFormatter;
    // let doc2: HasFormatter;
    // doc1 = { format: () => "a" }; // works as it has format()
    // doc1 = new Invoice("omar", "web work", 250);
    // doc2 = new Payment("ali", "plumbing work", 200);
    // let docs: HasFormatter[] = [];
    // docs.push(doc1);
    // docs.push(doc2);
    // class Invoicer {
    //   constructor(
    //     readonly name: string,
    //     private uid: string,
    //     public collected: number
    //   ) {}
    //   getInvoice(invoice: Invoice): void {
    //     console.log(`${this.name} has collected => ${invoice.format()}`);
    //     this.collected++;
    //   }
    // }
    // const inv1 = new Invoice("mario", "website work", 250);
    // const inv2 = new Invoice("Loi", "Home Stuff", 28);
    // let invoices: Invoice[] = [];
    // invoices.push(inv1);
    // //invoices.push("inv1");
    // invoices.push(inv2);
    // const invr1 = new Invoicer("Ah", "a1554", 0);
    // invr1.getInvoice(inv1);
    // invr1.getInvoice(inv2);
    // inv1.amount = 500;
    // // inv2.client = "ali"; <== accessible (readonly)
    // // inv2.details = "ali"; <== not accessible (private)
    // invoices.forEach((inv) => console.log(inv.format()));
}
// Generics
function lesson_16() {
    const calc = (num1, num2) => {
        return num1 + num2;
    };
    const sorter = (items) => {
        return items;
    };
    const user = (info) => {
        return info.name;
    };
    //user("ah")
    user({ name: "ah" });
    user({ name: "ah", age: 5 });
    const usr1 = {
        name: "Ahmed",
        uid: "ah15963",
        age: 15,
        details: ["a"],
    };
    const usr2 = {
        name: "Ahmed",
        uid: "ah15963",
        age: 15,
        details: [1, 2],
    };
}
// Enums
function lesson_17() {
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["JOURNAL"] = 1] = "JOURNAL";
        ResourceType[ResourceType["VIDEO"] = 2] = "VIDEO";
    })(ResourceType || (ResourceType = {}));
    const rc1 = {
        title: "metverse",
        type: ResourceType.JOURNAL,
        date: new Date(),
    };
}
