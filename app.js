//express 
const express = require('express');
const logger = require("volleyball")
const cors = require('cors')
//db connection
const db = require("./config/database")
const app = express();
const port = process.env.PORT || 5000;
//post routes 
const postRoutes = require('./routes/posts')
const UserRoutes = require('./routes/user')
// connecting to db 
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//middleware to fetching incoming request body
app.use(express.json());
//logging request to console for debug purpose
app.use(logger);
//get rid of cors errors
app.use(cors())

app.use("/posts", postRoutes);
app.use("/users", UserRoutes);

//error handling with unkown routes
app.use((req,res,next)=>{
    res.status(404).json({message:"the requested Resources not Found on server",err:'404'})
})

// server listeing on pre-defined port 
app.listen(port, console.log(`server running on port ${port}`));