// Only
class Book {
    constructor(title) {
      this._title = title;
    }
    get title() {
      return this._title;
    }
    set title(newTitle) {
      this._title = newTitle;
    }
  }
// Only
const littlePrince = new Book("The Little Prince"); // CH
console.log(littlePrince.title); // CH
littlePrince.title = "Le Petit Prince"; // 
console.log(littlePrince.title); // Le petit

module.exports = Book;