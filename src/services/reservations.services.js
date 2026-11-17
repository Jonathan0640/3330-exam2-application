//reservations database reservation ID, reservation type (if its either book or computer), card number, user ID
const reservations =[
    {
        reservationID: 0,
        reservationType: "Computer",
        cardNumber: 0,
        userID: 0
    }
];

//function to access reservation database
const getReservations = ()=>{
    return reservations;
}

//function to append reservation
const addReservation = (params)=>{
     reservations.push(params); //params will be a reservations object
}

export default{
    getReservations,
    addReservation
}