// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//database connections Local
mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.zje2p.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.log(err));


// routes prefix
const usersRoute = require('./routes/routes');
app.use('/api', usersRoute);


// start server
app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
});