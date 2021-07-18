const { init }  = require('../dbConfig')
const { ObjectId } = require('mongodb')

class Book {
    constructor(data){
        this.id = data.id
        this.bookName = data.bookName
        this.yearPublished = data.yearPublished
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const booksData = await db.collection('books').find().toArray()
                const books = booksData.map(d => new Book({ ...d, id: d._id }))
                resolve(books);
            } catch (err) {
                console.log(err);
                reject("Error retrieving books")
            }
        })
    }
    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let bookData = await db.collection('books').find({ _id: ObjectId(id) }).toArray()
                let book = new Book({ ...bookData[0], id: bookData[0]._id});
                resolve (dog);
            } catch (err) {
                reject('Book not found');
            }
        });
    }

    static create(bookName, authorName){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let bookData = await db.collection('books').insertOne({ bookName, authorName })
                let newBook = new Book(bookData.ops[0]);
                resolve (newBook);
            } catch (err) {
                reject('Error adding book information');
            }
        });
    }

    update() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let updatedBookData = await db.collection('books').findOneAndUpdate({ _id: ObjectId(this.id) }, { returnOriginal: false })
                let updatedBook = new Book(updatedBookData.value); 
                resolve (updatedBook);
            } catch (err) {
                reject('Error updating book')
            }
        });
    }

    destroy() {
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init();
                await db.collection('books').deleteOne({ _id: ObjectId(this.id) })
                resolve('Book was deleted');
            } catch (err) {
                reject('Book could not be deleted')
            }
        })
    }
}

module.exports = Book;