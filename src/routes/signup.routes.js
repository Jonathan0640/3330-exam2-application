import express from 'express';
import signupController from '../controller/signup.controller.js';

const router = express.Router();

//render signup page
router.get('/', signupController.getSignup);

//posts a user from signup
router.post('/', signupController.createSignup);

export default router;