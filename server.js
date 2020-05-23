var express = require('express');  
var app = express();  
var mongoose = require('mongoose');

const port = process.env.PORT || 8000;

// call routes
var user = require('./routes/user');
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
.connect(
    db
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

app.use("/user", user);
 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
