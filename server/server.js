const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
const getsroute = require('./routes/gets');



//Middleware
app.use(cors());
app.use('/gets', getsroute);

/*app.use("/", ()=>{
    console.log("me llamaron xd");
});*/

//ROUTES
app.get("/", (req,res) => {
    //console.log(books);
    res.json(books);

});


// Server Listening
app.listen(3001, () =>{
    console.log("holiiiiiiii " + 8000);
});