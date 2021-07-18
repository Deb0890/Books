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

// books update route
