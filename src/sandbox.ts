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

  const circ = (dimetar: number) => {
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
  let char: string;
  let age: number;
  let isLoggedIn: boolean;

  //age = "50"
  age = 50;

  //arrays
  let users: object[];
  let ids: string[] = [];

  //users.push({})
  ids.push("a1");

  // union types
  let mixed: (string | number)[] = [];
  mixed.push(5);
  mixed.push("5");
  //mixed.push(true)

  let uid: string | number;
  uid = "a1";
  uid = 1;
  //uid = false

  //objects
  let user: object;
  user = { name: "Han" };
  user = [];

  let user1: {
    name: string;
    uid: number;
    active: boolean;
  };

  //user1.name = "a";
  //user1.uid='a'
  //user1.active='a'
  //user1 = {}
}

// Dynamic (any) Types
function lesson_5() {
  //
  let age: any = 24;
  age = true;
  age = "25";
  age = {};

  //
  let mixed: any[] = [];
  mixed.push(5);
  mixed.push("5");
  mixed.push({});
  mixed.push(true);

  //
  let user: {
    name: any;
    age: any;
  };
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
  let greet: Function;
  let sum: Function;
  let divide: Function;

  greet = (): void => {
    console.log("hello");
  };

  function add(a: number, b: number, c?: number | string) {
    console.log(a + b);
  }
  add(5, 5);
  add(5, 5, 5);
  add(5, 5, "5");

  divide = (a: number, b: number, c: string | number = 4): number => {
    console.log(a / b);
    return a / b;
  };
}

function lesson_8() {
  type StringOrNum = string | number;
  type ObjWithName = { name: string; uid: StringOrNum };

  const greet = (name: StringOrNum) => {
    console.log(name);
  };

  const greatUser = (user: ObjWithName) => {
    console.log(user.name);
  };
}

// Function Signatures
function lesson_9() {
  // example-1
  let greet: (a: string, b: string) => void;
  greet = (name: string, greeting: string) => {
    console.log(`${greeting} ${name}`);
  };

  // example-2
  let calc: (a: number, b: number, c: string) => number;
  calc = (num1, num2, action) => {
    if (action === "add") {
      return num1 + num2;
    }
    return num1 - num2;
  };

  // example-3
  let logDetails: (obj: { name: string; age: number }) => void;

  type person = { name: string; age: number };
  logDetails = (user: person = { name: "ananyom", age: -1 }) =>
    console.log(`${user.name} is ${user.age} years old`);
}

// The Dom & Type Casting
function lesson_10() {
  // example - 1
  const anchor = document.querySelector("a");

  if (anchor) {
    console.log(anchor.href);
  }
  // or
  console.log(anchor?.href);

  // or add ! to tell ts that <a> is existing for sure
  const anchor2 = document.querySelector("a")!;
  console.log(anchor2.href);

  // example - 2

  const form = document.querySelector("form")!;
  // ==> form type is HTMLFormElement

  const form1 = document.querySelector(".form");
  // ==> form1 type is HTMLFormElement | null

  //const form2 = document.querySelector(".new-item-form")!;
  // ==> form2 type is Element

  //const form3 = document.querySelector(".new-item-form") as HTMLFormElement;
  // ==> form3 type is HTMLFormElement
  //console.log(form3.children);

  // inputs
  const type = document.querySelector("#type") as HTMLSelectElement;
  const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
  const details = document.querySelector("#details") as HTMLInputElement;
  const amount = document.querySelector("#amount") as HTMLInputElement;

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(
      type.value,
      " ",
      toFrom.value,
      " ",
      details.value,
      " ",
      amount.valueAsNumber
    );
  });
}

// Classes
function lesson_11() {
  // classes
  class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
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

  let invoices: Invoice[] = [];
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
    constructor(
      readonly name: string,
      private uid: string,
      public collected: number
    ) {}
    getInvoice(invoice: Invoice): void {
      console.log(`${this.name} has collected => ${invoice.format()}`);
      this.collected++;
    }
  }
  // **** PART-1 ****
  // classes
  class Invoice {
    readonly client: string;
    private details: string;
    public amount: number; // public is by default

    constructor(c: string, d: string, a: number) {
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

  let invoices: Invoice[] = [];
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

  interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(n: number): number;
  }

  const user1: IsPerson = {
    name: "ah",
    age: 25,
    speak(text: string): void {
      console.log(text);
    },
    spend(amount: number): number {
      console.log("I spent ", amount);
      return amount;
    },
  };

  let user2: IsPerson;

  const greetPerson = (person: IsPerson) => {
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
  const calc = <T extends number>(num1: T, num2: T) => {
    return num1 + num2;
  };

  const sorter = <T>(items: T[]) => {
    return items;
  };

  const user = <T extends { name: string }>(info: T) => {
    return info.name;
  };

  //user("ah")
  user({ name: "ah" });
  user({ name: "ah", age: 5 });

  // generics on interfaces
  interface IsUser<T> {
    name: string;
    uid: string;
    age: number;
    details: T;
  }

  const usr1: IsUser<string[]> = {
    name: "Ahmed",
    uid: "ah15963",
    age: 15,
    details: ["a"],
  };
  const usr2: IsUser<number[]> = {
    name: "Ahmed",
    uid: "ah15963",
    age: 15,
    details: [1, 2],
  };
}

// Enums
function lesson_17() {
  enum ResourceType {
    BOOK,
    JOURNAL,
    VIDEO,
  }

  interface Resource<> {
    title: string;
    type: ResourceType;
    date: Date;
  }

  const rc1: Resource = {
    title: "metverse",
    type: ResourceType.JOURNAL,
    date: new Date(),
  };
}

// Tuples
function lesson_18() {
  let student: [string, string, number, boolean];
  student = ["ah", "A15563", 25, true];
  //student = ["ah", "A15563", 25, "true"]; <<-- mistake
}
