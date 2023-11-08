const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const User = require('./models/User');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const bookRouter = require('./routes/bookRoutes');

dotenv.config();
const app = express();
dbConnect();
//Passing body data
app.use(express.json());

//connect DB=>it is in dbConnect

//routes
//user routes

app.use('/api/users', usersRoute); //everything will come from usersRoute
//Books routes
app.use('/api/books', bookRouter);
//Error middleware
app.use(error.errorMiddlewareHandler);
//server
const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server is up and running ${PORT}`);
});
