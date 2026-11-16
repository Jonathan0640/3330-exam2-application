import express from 'express'
import booksController from '../controller/books.controller.js'

const router = express.Router();

router.get('/', booksController.getBooks);
router.post('/:bookId/reserve', booksController.reserveBook);
router.post('/', booksController.createBook);

export default router