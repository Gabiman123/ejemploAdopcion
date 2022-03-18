const express =require("express"),
app = express(),
puerto = process.env.PORT || 3000,
mysql = require("mysql"),
bodyParser = require("body-parser"),
myConnection = require("express-myconnection"),
db = require("./database").config;
userRoutes = require("./routes/user");
petRoutes = require("./routes/pet");
adoptionRoutes = require("./routes/adoption");

app.use(bodyParser.urlencoded({extended:true}));
app.use(myConnection(mysql, db));
app.use("/user", userRoutes);
app.use("/pet", petRoutes);
app.use("/adoption", adoptionRoutes);

app.listen(puerto, err => {
    if(err){
        console.log(`Tenemos error ${err}`);
    }
    else{
        console.log(`Todo bien en el puerto ${puerto}`);
    }
})