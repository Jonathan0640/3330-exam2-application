import express from 'express'
import session from 'express-session'
import { randomBytes } from 'node:crypto'
import computerRouter from './src/routes/computers.routes.js' //for the computer page
import bookRouter from './src/routes/books.routes.js'
import adminRouter from './src/routes/admin.routes.js'
<<<<<<< HEAD
import signupRouter from './src/routes/signup.routes.js';
=======
import usersController from './src/controller/users.controller.js'
>>>>>>> 062c19faf575f014dbf8dc9f6b3478eb1872d40d

const app = express();
const sessionSecret = process.env.SESSION_SECRET;

if (process.env.NODE_ENV === 'production' && !sessionSecret) {
    throw new Error('SESSION_SECRET must be set in production.');
}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: sessionSecret || randomBytes(32).toString('hex'),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
    }
}));
app.use((req, res, next) => {
    res.locals.user = req.session && req.session.user;
    next();
});

app.get("/", (req, res) =>{
    res.render("home.ejs");
});

app.get('/signin', usersController.getSignIn);
app.post('/signin', usersController.signIn);

app.use('/signup', (req, res) =>{
    res.render("signup.ejs");
})

app.use('/books', bookRouter)
app.use('/admin', adminRouter)
app.use('/signup', signupRouter);

app.use('/computers', computerRouter); //later finished result when computer page is done


export default app;