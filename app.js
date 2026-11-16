import express from 'express'
import computerRouter from './src/routes/computers.routes.js' //for the computer page

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.render("home.ejs");
});


app.use('/computers', computerRouter); //later finished result when computer page is done
// app.get("/computers", (req, res) =>{
//     res.render("computers.ejs");
// });

export default app;