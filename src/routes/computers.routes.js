import express from 'express'
import computersController from '../controller/computers.controller.js'

const router = express.Router();

router.get('/', computersController.getComputers);  //route rendering computers page

//router.post('/', computersController.createReservation);    //route to post reservation

export default router