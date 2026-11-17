import express from 'express'
import booksController from '../controller/books.controller.js'

const router = express.Router();

router.get('/', booksController.getAdmin);
router.post('/books', booksController.createBook);

export default router;
