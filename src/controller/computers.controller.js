import computerServices from '../services/computers.services.js'
import reservationsServices from '../services/reservations.services.js';

const getComputers = (req,res) =>{
    //renders the computer page
    res.render('computers.ejs');
    
    //to check if it has access to computers database
    const computers = computerServices.getAllComputers();
    res.status(200).json(computers);
    console.log(computers);
}

const createReservation = (req, res) =>{
    //referencing 3330-layered-project-main insertTask function as guide
    const libraryCard = req.body.library-card;      //used to both try and find valid card and for creating reservation
    const computerID = req.body.computerid;         //used to try and find valid computer
    
    const userID = getUserID(libraryCard);         //define function to get userid linked to librarycard
    const computerDB = computerServices.getAllComputers();  //access computers database
    const libraryCardDB = libraryServices.getAllCards();  //access cards database

    //create and post reservation if computerID matches to a valid computer obj && libraryCard matches to a valid library card obj
    const registedCard = libraryCardDB.find( (card) => card.cardNumber === libraryCard);
    const registeredComputer = computerDB.find( (computer) => computer.computerID === computerID);


    if(registedCard && registeredComputer){
        const newReservation = {
            reservationID: Math.max(...db.map( (reservation) => reservation.reservationID )) + 1,
            reservationType: "Computer",
            cardNumber: libraryCard,
            userID: userID
        }
        reservationsServices.addReservation(newReservation);
    }
}

//handle request/responses here for computer
export default{
    getComputers
}