function add(a: number, b: number): number{
    return a + b;
}

console.log(add(1,2));

console.log(add(4, 5));

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

  console.log(today)