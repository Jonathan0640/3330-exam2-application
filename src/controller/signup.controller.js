import userServices from '../services/user.services.js';
import librarycardServices from '../services/librarycard.services.js';

const getSignup = (req, res) => {
    res.render('signup.ejs');
};


const createSignup = (req, res) => {

    //test
    console.log("ran createSignup");

    //initialize const from fields
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNum;

    //access the userDB
    const userDB = userServices.getAllUsers();

    //create new user to append
    const newUser = {
        userID: Math.max(
            0,
            ...userDB.map((user) => user.userID)
        ) + 1,

        name: name,
        email: email,
        phoneNumber: phoneNumber,
        role: "user"
    };

    // append new created user to user database
    userServices.addUser(newUser);

    // new card thats pushed
    const newCard = librarycardServices.addLibraryCard(newUser.userID);

    console.log("New user:", newUser);
    console.log("New library card:", newCard);

    return res.render('signup.ejs', {
        user: null,
        signupSuccess: true,
        libraryCard: newCard.cardNumber
    });
};

//export default
export default {
    getSignup,
    createSignup
};