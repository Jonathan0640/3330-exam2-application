import express from 'express'
import booksController from '../controller/books.controller.js'

const router = express.Router();

router.get('/', booksController.getBooks);
router.post('/:bookId/reserve', booksController.reserveBook);

export default router