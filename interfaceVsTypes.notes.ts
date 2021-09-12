// This is basically the differences between types and interfaces

// Interfaces may only be used to declare the shapes of objects, not rename primitives.

// Here's two examples of
// using types and interfaces
// to describe an object

interface AnObject1 {
  value: string;
}

type AnObject2 = {
  value: string;
};

// Using type we can create custom names
// for existing primitives:

type SanitizedString = string;
type EvenNumber = number;

// This isn't feasible with interfaces
// interface X extends string {}

// An interface can be re-opened
// and new values added:

interface Mammal {
  genus: string;
}

interface Mammal {
  breed?: string;
}

const animal: Mammal = {
  genus: "1234",
  // Fails because breed has to be a string
  // breed: 1,
};

// type Reptile = {
//   genus: string;
// };

// // You cannot add new variables in the same way
// type Reptile = {
//   breed?: string;
// };
