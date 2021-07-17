const db = connect("mongodb://localhost:27017/library");

db.books.drop()
db.authors.drop()

db.books.insertMany([
    {bookName: "Pride and Prejudice", yearPublished: 1813, authorName:"Jane Austen" },
    {bookName: "To Kill a Mockingbird", yearPublished: 1960, authorName: "Harper Lee" },
    {bookName: "The Great Gatsby", yearPublished: 1925, authorName:"F. Scott Fitzgerald" },
    {bookName: "Emma", yearPublished: 1815},
    {bookName: "The Outsiders", yearPublished: 1967, authorName: "S.E. Hinton"},
    {bookName: "The Catcher in the Rye", yearPublished: 1951, mainCharacter: "Holden Caulfield"},
    {bookName: "War and Peace", yearPublished: 1867 },
    {bookName: "Of Mice and Men", yearPublished: 1937, authorName: "John Steinbeck"},
    {bookName: "Rebecca", yearPublished: 1938, authorName: "Daphne du Maurier"},
    {bookName: "One Hundred Years of Solitude", yearPublished: 1967, authorName: "Gabriel Garcia Marquez"},
])

db.authors.insertMany([
    {name: "Jane Austen"},
    {name: "Charles Dickens"},
    {name: "Ernest Hemingway"},
    {name: "John Steinbeck"},
    {name: "J.D. Salinger"},
    {name: "Harper Lee"},
])

