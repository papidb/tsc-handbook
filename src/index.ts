type Person = {
  name: string;
  age: number;
  print?: () => void;
};

const person: Person = {
  name: "Max",
  age: 30,
};

// using type assertion won't throw an error
// as it doesn't check the type of the object
// it just assumes that the object has the properties
// that we are looking for

// from the docs https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or null generated if the type assertion is wrong.

const micheal = {} as Person;

// it doesn't allow imposible coersion like:
// const x = "hello" as Person;

// double type assertion 
const favour = "lol" as any as Person;

console.log(person);
console.log(favour);
console.log(micheal);
