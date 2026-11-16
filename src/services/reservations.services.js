//reservations database reservation ID, reservation type (if its either book or computer), card number, user ID
const reservations =[
    {
        reservationID: 0,
        reservationType: "computer",
        cardNumber: 0,
        userID: 0
    }
];

const getReservations = ()=>{
    return reservations;
}

const addReservation = (params)=>{
     reservations.push(params); //params will be a reservations object
}

export default{
    getReservations,
    addReservation
}