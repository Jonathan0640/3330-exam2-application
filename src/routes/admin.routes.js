import express from 'express'
import usersController from '../controller/users.controller.js'

const router = express.Router();

router.get('/', usersController.getAdmin);
router.post('/books', usersController.createBook);
router.post('/users/promote', usersController.promoteUser);

export default router;
