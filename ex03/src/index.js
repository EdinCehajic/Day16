// Only
class Person {
    static display() {
      let message = "Static method is invoked from Person class";
      return message;
    }
    show() {
      console.log(Person.display());
    }
  }
// Only

var message = new Person();
message.show();
module.exports = Person;