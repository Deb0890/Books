const express = require('express');
const router = express.Router();

const Book = require('../models/book')

// books index route
router.get('/', async (req, res) => {
    try {
        const books = await Books.all
        res.json({books})
    } catch(err) {
        res.status(500).json({err})
    }
})

// books show route
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.json(book)
    } catch (err) {
        res.status(404).json({err})
    }
})

// create book route
router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body.bookName, req.body.authorName)
        res.json(book)
    } catch(err) {
        res.status(404).json({err})
    }
})

// books update route
router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        const updatedBook = await book.update()
        res.json({book: updatedBook})
    } catch(err) {
        res.status(500).json({err})
    }
})

// delete book route
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        await book.destroy()
        res.status(204).json('Book deleted')
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = {router};