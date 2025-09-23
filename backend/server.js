const express = require("express");
const connectDB = require("./config/db"); 
require("dotenv").config();
const cinemasRoute = require('./routes/api/cinemas.routes.js');
const moviesRoute = require('./routes/api/movies.routes.js');
const screensRoute=require('./routes/api/screens.routes.js');
const showsRoute=require('./routes/api/shows.routes.js');
const usersRoute=require('./routes/api/users.routes.js')


const app = express();

connectDB();

app.use(express.json());


//using the routes-cinemas
app.use('/api/cinemas', cinemasRoute);
//using the routes-movies
app.use('/api/movies',moviesRoute);
//using the routes-screens
app.use('/api/screens',screensRoute);
//using the routes-shows
app.use('/api/shows',showsRoute);
//using the routes-users
app.use('/api/users',usersRoute);



app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
