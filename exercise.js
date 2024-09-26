class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    set fullName(name) {
      [this._firstName, this._lastName];
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person)
  
  console.log(person.fullName); // "John Doe"
  
  person.fullName = 'Jane Smith';
  // console.log(person._firstName); // "Jane"
  // console.log(person._lastName);  // "Smith"
  