const books = [ //hard-coded books to test website
    {
        name: "Percy Jackson" ,
        reserved: false, // bool value for  if book is reserved/checked out
        genre: "fiction",
        author: "Rick Riordan",
        Age_Rating: 9, //recommended age rating for readers
        location: "F-16", //shelf to find book
        img: "/images/Percy_Jackson.png"
    },

    {
        name: "Lord Of The Flies" ,
        reserved: false, 
        genre: "fiction",
        author: "William Golding",
        Age_Rating: 13, 
        location: "F-11",
        img: "/images/LotF.png"
    },

    {
        name: "Educated" ,
        reserved: false, 
        genre: "non-fiction",
        author: "Tara Westover",
        Age_Rating: 16, 
        location: "N-3",
        img: "/images/Educated.png"
    },

    {
        name: "A Short History of Nearly Everything" ,
        reserved: false, 
        genre: "non-fiction",
        author: "Bill Bryson",
        Age_Rating: 18, //set to 18+ to test filter for kids books only
        location: "N-1",
        img: "/images/ShortHistory.png"
    },

    {
        name: "Annihilation" ,
        reserved: true, // set to true to test to filter out reserved books
        genre: "fiction",
        author: "Jeff VanderMeer", 
        Age_Rating: 16, 
        location: "F-1",
        img: "/images/Annihilation.png"
    }
]

//access books in other files
const getBooks=() =>{
    return books;
};

const reserveBoook=(book) =>{
    book.reserved = true;
};

const returnBook=(book)=>{
    book.reserved = false;
};

export default {
    getBooks
}