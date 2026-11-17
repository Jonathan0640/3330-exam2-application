import computerServices from '../services/computers.services.js'
import librarycardServices from '../services/librarycard.services.js';
import reservationsServices from '../services/reservations.services.js';

const getComputers = (req,res) =>{
    //to check if it has access to computers database
    const computers = computerServices.getAllComputers();
    res.status(200)//.json(computers);

    //renders the computer page
    res.render('computers.ejs', {computers});

    console.log(computers);
}

const createReservation = (req, res) =>{
    //referencing 3330-layered-project-main insertTask function as guide
    console.log("ran createreservation");
    const libraryCard = Number(req.body.librarycard);      //used to both try and find valid card and for creating reservation
    const computerID = Number(req.body.computerid);         //used to try and find valid computer
    
    const computerDB = computerServices.getAllComputers();  //access computers database
    const libraryCardDB = librarycardServices.getAllCards();  //access cards database
    const reservationDB = reservationsServices.getReservations(); //access reservation database

    //create and post reservation if computerID matches to a valid computer obj && libraryCard matches to a valid library card obj
    const registedCard = libraryCardDB.find( (card) => card.cardNumber === libraryCard);
    const registeredComputer = computerDB.find( (computer) => computer.computerID === computerID);
    if(registedCard && registeredComputer){
        const userID = librarycardServices.getUserID(libraryCard);        //define helper function to get userid linked to librarycard
        const newReservation = {
            reservationID: Math.max(0, ...reservationDB.map( (reservation) => reservation.reservationID )) + 1,
            reservationType: "Computer",
            cardNumber: libraryCard,
            userID: userID
        }
        reservationsServices.addReservation(newReservation);

        console.log("reservation added:");
        console.log(reservationsServices.getReservations());

        return res.redirect('/computers');
    }
    console.log("card or computer was not found/invalid.");

    return res.status(400).send("Invalid library card or computer");
}

//handle request/responses here for computer
export default{
    getComputers,
    createReservation
}