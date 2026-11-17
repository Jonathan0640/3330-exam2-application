//helper function to get userID from a libraryCard
function getUserID(param){
  const libCard = param;    //paramter is a librarycard number from input field
  const libCardOBJ = libraryCards.find((card) => card.cardNumber === libCard);  //look through db to find match
  return libCardOBJ.userID; //return the corresponding userID from libraryCard
}

const libraryCards = [
    {
        cardNumber: 1001,
        userID: 1,
        date: "Today"
    },
    {
        cardNumber: 1002,
        userID: 2,
        date: "Today"
    },
    {
        cardNumber: 1003,
        userID: 3,
        date: "Today"
    }
];

const getAllCards = ()=>{
    return libraryCards;
}


const addLibraryCard = (userID) => {

    const newCard = {
        cardNumber: Math.max(
            1000,
            ...libraryCards.map((card) => card.cardNumber)
        ) + 1,

        userID: userID,
        date: "Today"
    };

    libraryCards.push(newCard);
};

export default{
    getUserID,
    getAllCards,
    addLibraryCard
}
