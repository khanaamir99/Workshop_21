const express = require("express");
const notes = require("../data/notes");
const dotenv = require('dotenv');
const { application } = require("express");
const userRoutes=require('./routes/userRoutes')
const connectDB = require("./config/db");
// const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("API is running");
// });
// app.get('/api/notes', (req, res) => {
//     res.json(notes);
// });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
app.use('/api/users', userRoutes);


// application.get("/api/notes/:id", (req, res) =>{
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note); 
// });

// app.use(notFound);
// app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
                