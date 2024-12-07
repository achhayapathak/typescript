# TypeScript

### TypeScript vs JavaScript

* TypeScript is a statically-typed superset of JavaScript, designed to enhance the development of large-scale applications.
* It introduces optional `static typing`, `classes`, and `interfaces` to JavaScript, drawing parallels with languages like `C#` and `Java`. 
* TypeScript code is transpiled to plain JavaScript, ensuring compatibility across various JavaScript environments.
* TypeScript is *statically typed*, providing type safety, while JavaScript is *dynamically typed*.


### Advantages of TypeScript

1. **Improved Tooling**: TypeScript's static typing enables better tooling support. Features like *autocompletion*, *type inference*, and type checking make the development process more efficient and enjoyable.

2. **Better Documentation**: TypeScript codebases are often easier to understand and maintain. The type annotations serve as implicit documentation, making it easier to understand what kind of values a function expects and returns.

3. **Advanced Features**: TypeScript supports advanced JavaScript features such as `decorators` and `async/await`, and it also introduces features not available in JavaScript, such as `interfaces`, `enums`, and `tuples`.

4. **Refactoring**: TypeScript's tooling makes refactoring larger codebases safer and more predictable. You can make large-scale changes with confidence.

5. **Community and Ecosystem**: TypeScript has a growing community and ecosystem. Many popular JavaScript libraries, such as React and Angular, have TypeScript definitions, which makes it easier to use them in a TypeScript project.


### Type Declarations and Variables in TypeScript

1. `number`: This is used for numeric values. Can be used for both integer and floats.

2. `string`: This is used for textual data. Can be defined using '', "" or ``.

3. `boolean`: This is used for logical values. It can only have `true` or `false`.

4. `object`: This is used for key value pairs stored in a complex format.

5. `null`: Use this to explicitly set a variable or object to have no value. It can only have `null` assigned.

6. `undefined`: It is used when a variable is declared but it is not yet assigned. It can have only one value `undefined`.

7. `symbol`: This is used to create unique identifiers for objects.
```javascript
let symbol1: symbol = Symbol('symbol1');
```

8. `bigint`: This is used for numbers larger than `2^53 - 1`, which is the upper limit for the `number` type.

9. `any`: This type is used when the type of a variable could be anything. 
```javascript
let variable: any = 'I am a string';
variable = 42; // I am a number now
```

TypeScript provides a way to define the shape of an object, including its properties and methods, using type declarations. This allows you to create reusable types that can be used to define the structure of objects throughout your codebase.

1. **Type Aliases**: It is a way to create name for an existing type. You can define complex types once and use them at multiple places. Example: 
```javascript
type Point = {
  x: number;
  y: number;
}

let origin: Point = { x: 0, y: 0 };
```

2. **Intersection Type**: Intersection types are a way to combine multiple types into one.
```javascript
type Printable = {
  print: () => void;
};

type Loggable = {
  log: () => void;
};

type Logger = Printable & Loggable;

let logger: Logger = {
  print: () => console.log('Printing...'),
  log: () => console.log('Logging...'),
};
```

3. **Union Types**: Union types is a way to define a type that can be more than one different types.
```javascript
type ID = string | number;

let id: ID = '123';
id = 123;
```

4. **Type Assertions**: Type assertions are a way to tell the TypeScript compiler that you know more about the type of a value than it does.
```javascript
let value: any = 'Hello, TypeScript!';
let length: number = (value as string).length;
```

### Functions in TypeScript

```javascript
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
}

greet('Bob');  // Outputs: Hello, Bob!


function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

let total: number = sum(1, 2, 3, 4, 5); // total is 15
```


### Classes and Objects in TypeScript

**Class declaration**: In TypeScript, classes are declared using the `class` keyword.
```javascript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let john = new Person('John', 25);
john.greet(); // Outputs: Hello, my name is John and I am 25 years old.
```

**Inheritance**: TypeScript supports inheritance, a mechanism of basing a class upon another class, retaining similar implementation. Inheritance is achieved using the `extends` keyword.
```javascript
class Employee extends Person {
  department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  greet(): void {
    super.greet();
    console.log(`I work in ${this.department}.`);
  }
}

let jane = new Employee('Jane', 30, 'HR');
jane.greet(); // Outputs: Hello, my name is Jane and I am 30 years old. I work in HR.
```

**Abstract Classes**: Abstract classes are classes that cannot be instantiated directly. They are used as base classes for other classes and can contain abstract methods that must be implemented by derived classes.
```javascript
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

let circle = new Circle(5);
console.log(circle.area()); // Outputs: 78.54
```

**Encapsulation**: Encapsulation is the bundling of data (properties) and methods that operate on the data (methods) into a single unit called a class. In TypeScript, encapsulation is achieved by using access modifiers such as public, private, and protected.
```javascript
class Person {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let john = new Person("John", 25);
console.log(john.name); // Error: Property "name" is private
console.log(john.age);  // Error: Property "age" is protected
```

**Polymorphism**: Polymorphism is the ability of an object to take on many forms. In TypeScript, polymorphism is achieved through method overriding, where a method in a subclass has the same name and signature as a method in its superclass.
```javascript
class Animal {
  speak(): void {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  speak(): void {
    console.log('Dog barks');
  }
}

let animal: Animal = new Dog();
animal.speak(); // Outputs: Dog barks
```

**Access Modifiers**: TypeScript supports the access modifiers `public`, `private`, and `protected`. By default, each member is `public`.


### Interfaces in TypeScript
Interfaces in TypeScript are powerful ways to define contracts within your code. They are used to type-check whether an object fits a certain structure.

**Interface Declaration**: Interfaces are declared with the `interface` keyword.
```javascript
interface Person {
    name: string;
    age: number;
}

let john: Person = {
    name: 'John',
    age: 21
}
```

**Optional Properties**: Interface properties can be marked optional with `?`.
```js
interface Person {
    name: string;
    age?: number;
}

let alice: Person = {name: 'Alice'};
```

**Function Types**: Interfaces can also describe function types.
```js
interface GreetFunction {
    (name: string, age: number): string;
}

let greet: GreetFunction: function(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
```

**Extending Interfaces**: Interfaces can extend one another, creating a new interface that inherits the member of base interface.

```js
interface Animal {
    name: string;
}

interface Dog {
    breed: string;
}

let myDog: Dog = {name: 'Rex', breed: 'German Shepherd'};
```


### Enums in TypeScript

Enums are a way to define a set of named constants. They are often used to represent a set of related values, such as the days of the week or the months of the year.

**Numeric Enums**: Numeric enums are a way to define a set of named constants with numeric values. By default, the values of the constants start at 0 and increment by 1 for each subsequent constant. Example
```js
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let today: Day = Day.Monday;
console.log(today); // Output will be 1
```

**String Enums**: String enums are a way to define a set of named constants with string values.
```js
enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December'
}

let currentMonth: Month = Month.June;
```

**Reverse Mapping**: You can access the name of the constant by its value.
```js
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let dayName: string = Day[1]; // 'Monday'
```


### Generics in TypeScript
Generics are a way to define a function or class that can be used with different types of data. They are often used to create reusable components that can work with different types of data.

TypeScript supports generics, allowing you to write type-safe code that is flexible and reusable.

**Generic Functions**: Generic functions are the functions that can work with a variety of data types. They are defined using the type parameters, which are placeholders for the actual types that will be used when the function is called.
```js
function identity<T>(value: T): T {
    return value;
}

let result1: number = identity<number>(43);
let result2: string = identity<string>('Hello');
```

**Generic Classes**: Generic classes are classes that can work with a variety of data types. They are defined using type parameters, which are placeholders for the actual types that will be used when the class is instantiated.
```js
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

let box1: Box<number> = new Box<number>(42);
let box2: Box<string> = new Box<string>('Hello, TypeScript!');
```

**Generic Constraints**: Generic constraints are a way to restrict the types that can be used with a generic function or class. They are defined using the `extends` keyword, followed by the type or interface that the type parameter must extend.
```js
interface Printable {
  print(): void;
}

function printValue<T extends Printable>(value: T): void {
  value.print();
}

class Person implements Printable {
  print(): void {
    console.log('Printing person...');
  }
}

let person: Person = new Person();
printValue(person);
```

### Acknowledgement
These notes are made from [this](https://www.freecodecamp.org/news/typescript-for-beginners-guide/?ref=dailydev) article.