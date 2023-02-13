const bookCollection = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    }
  ];
  const result = bookCollection.filter(bookCollection => bookCollection.length > 4);
  
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  Book.prototype.toString = function() {
    return this.title + 'by' + this.author
  
  }
  Book.prototype.print = function() {
    console.log(this.toString());
  }
  
  var  Awesome= new Book('Hamlet ', ' William Shakespeare');
  
  Awesome.print()