import express from 'express'
import booksController from '../controller/books.controller.js'

const router = express.Router();

router.get('/', booksController.getBooks);  //route rendering books page

export default router