import bookServices from '../services/books.services.js'
import libraryCardServices from '../services/librarycard.services.js'
import userServices from '../services/user.services.js'

const getAdmin = (req, res) => {
    const messages = {
        created: 'Book added to the catalog.',
        promoted: 'User promoted to admin.'
    };
    const users = userServices.getAllUsers();
    const libraryCards = libraryCardServices.getAllCards().map((card) => ({
        ...card,
        user: users.find((user) => user.userID === card.userID)
    }));

    return res.render('admin.ejs', {
        reservedBooks: bookServices.getBooks().filter((book) => book.reserved),
        libraryCards,
        usersToPromote: users.filter((user) => user.role !== 'admin'),
        message: messages[req.query.message]
    });
};

const createBook = (req, res) => {
    const user = req.session && req.session.user;
    // Allow anonymous submissions for testing until sign-in is implemented.
    if (user && user.role !== 'admin') {
        return res.sendStatus(403);
    }

    const body = req.body || {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const author = typeof body.author === 'string' ? body.author.trim() : '';
    const genre = typeof body.genre === 'string' ? body.genre.trim() : '';
    const location = typeof body.location === 'string' ? body.location.trim() : '';
    const rawAgeRating = typeof body.Age_Rating === 'string' ? body.Age_Rating.trim() : '';
    const ageRating = Number(rawAgeRating);
    const img = typeof body.img === 'string' ? body.img.trim() : '';

    if (!name || !author || !genre || !location || !rawAgeRating || !Number.isInteger(ageRating) || ageRating < 0) {
        return res.status(400).send('Enter a title, author, genre, non-negative age rating, and location.');
    }

    if (img && (!img.startsWith('/images/') || img.includes('..'))) {
        return res.status(400).send('Book image must be a path under /images/.');
    }

    bookServices.addBook({
        name,
        author,
        genre,
        Age_Rating: ageRating,
        location,
        ...(img ? { img } : {})
    });

    return res.redirect('/books?message=created');
};

const promoteUser = (req, res) => {
    const currentUser = req.session && req.session.user;
    if (currentUser && currentUser.role !== 'admin') {
        return res.sendStatus(403);
    }

    // Allow promotion testing before sign-in is implemented.
    const userID = Number(req.body && req.body.userID);
    if (!Number.isInteger(userID) || userID < 1) {
        return res.status(400).send('Select a valid user.');
    }

    if (!userServices.promoteUser(userID)) {
        return res.status(404).send('User not found.');
    }

    return res.redirect('/admin?message=promoted');
};

export default {
    getAdmin,
    createBook,
    promoteUser
};
