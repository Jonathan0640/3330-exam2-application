import bookServices from '../services/computers.services.js'

const getBooks = (req,res) =>{
    //renders the books page
    res.render('books.ejs');
    
    //to check if it has access to books database
    const books = bookServices.getBooks();
    res.status(200).json(books);
    console.log(books);
}

export default {
    getBooks
}