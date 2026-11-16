import bookServices from '../services/books.services.js'

const getBooks = (req, res) => {
    const user = req.session && req.session.user;
    const messages = {
        reserved: 'That book is already reserved.',
        created: 'Book added to the catalog.'
    };

    res.render('books.ejs', {
        books: bookServices.getBooks(),
        user,
        message: messages[req.query.message]
    });
};

const reserveBook = (req, res) => {
    const user = req.session && req.session.user;
    if (!user) {
        return res.redirect('/signin');
    }

    const book = bookServices.getBookById(req.params.bookId);
    if (!book) {
        return res.status(404).send('Book not found.');
    }

    if (!bookServices.reserveBook(book.id)) {
        return res.redirect('/books?message=reserved');
    }

    return res.redirect('/books');
};

const createBook = (req, res) => {
    const user = req.session && req.session.user;
    if (!user) {
        return res.redirect('/signin');
    }

    if (user.role !== 'admin') {
        return res.sendStatus(403);
    }

    const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
    const author = typeof req.body.author === 'string' ? req.body.author.trim() : '';
    const genre = typeof req.body.genre === 'string' ? req.body.genre.trim() : '';
    const location = typeof req.body.location === 'string' ? req.body.location.trim() : '';
    const rawAgeRating = typeof req.body.Age_Rating === 'string' ? req.body.Age_Rating.trim() : '';
    const ageRating = Number(rawAgeRating);
    const img = typeof req.body.img === 'string' ? req.body.img.trim() : '';

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

export default {
    getBooks,
    reserveBook,
    createBook
};
