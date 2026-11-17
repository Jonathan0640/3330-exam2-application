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

export default {
    getBooks,
    reserveBook
};
