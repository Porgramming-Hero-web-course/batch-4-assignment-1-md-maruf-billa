# 😍 The Black Magic of Type Guards in TypeScripts 😍

TypeScript brings a lot of peace of mind to JavaScript development. With its type system, I know that my code is more likely to catch errors before runtime. But sometimes, simply defining types isn’t enough, especially in complex applications where i need a little more control. That’s where *type guards* come in—they’re a way to refine types and make my TypeScript code even more reliable.

In this post, we’ll dive into what type guards are, why they’re crucial, and the different ways i can use them to make my code cleaner, safer, and easier to debug.

---

## Why I use Type Guards?

TypeScript's type system is powerful, but it has its limitations. For example, if i working with objects that could be one of several types, TypeScript alone won’t always know how to narrow down those types at runtime. This is especially true for union types or polymorphic functions, where a variable can hold values of different types. Type guards help me by providing a way to “guard” the type, ensuring the code inside a certain block only runs if the value is of a particular type.

I jokingly call on TypeScript: *“Hey, if this value is of type GF, do this, but if it’s of type BF, handle it differently.”* 😁

---

## How to use Type Guards? How many Types have?


### 1. `typeof` Type Guard
The simplest and most commonly used type guard is `typeof`. It works well for primitive types like `string`, `number`, and `boolean`.

Example:
```typescript
function mamaCheckIt(value: string | number) {
    if (typeof value === "string") {
        console.log("It's a string mama:");
    } else {
        console.log("It's a number number mama");
    }
}
```

In this example, TypeScript understands that if `typeof value` is `"string"`, then `value` must be of type `string`. Otherwise, it’s a `number`.



### 2. `instanceof` Type Guard
It's mainly use for class. `instanceof` helps find if an object is an instance of a particular class.


Example:

```typescript
class Dog {
    dogSound() {
        console.log("gheau gheau 🐕‍🦺");
    }
}

class Cat {
    catSound() {
        console.log("Meow! 🐈");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.dogSound();
    } else {
        animal.catSound();
    }
}
```

In this example, `instanceof` helps TypeScript narrow down the type to either `Dog` or `Cat`, allowing me to call the appropriate method safely.

### 3. Custom Type Guards with `is` Keyword
Custom type guards are incredibly powerful and allow me to define a function that tells TypeScript whether a value is of a specific type. This is useful when dealing with complex objects or interfaces.

Example :

```typescript
interface Girl {
    shaping: () => void;
}

interface Boy {
    bike: () => void;
}

function isGirl(user: Girl | Boy): user is Girl {
    return (user as Girl).shaping !== undefined;
}

function checkUser(user: Girl | Boy) {
    if (isGirl(user)) {
        user.shaping();
    } else {
        user.bike();
    }
}
```

In this example, `isGirl` is a custom type guard function that checks if `user` has a `shaping` method. If it does, TypeScript now knows that `user` is of type `Girl`, letting me safely call `shaping()`.

### 4. In Operator Type Guard
The `in` operator is handy when working with objects that have optional properties, allowing me to check if a specific property exists on an object.

Example :

```typescript
interface Computer {
    computer: () => void;
}

interface Laptop {
    laptop: () => void;
}

function checkDevice(device: Computer | Laptop) {
    if ("computer" in device) {
        device.computer();
    } else {
        device.laptop();
    }
}
```

In this Example, if `computer` exists in `device`, TypeScript understands that `device` must be of type `Computer` if that property is present.

---

No More to day. If you have any question or suggestion please sen on this email `dev.abumahid@gmail.com`
