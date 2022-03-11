
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const port = process.env.PORT;


//cors
const corsOptions = {
  origin: "http://loalhost:3000"
};


//middlewares
 app.use(cors(corsOptions));

//routes
require("./routes/user")(app);
// require('./routes/image')(app);
// require('./routes/video')(app);

// starting web server on defined port...
app.listen(port, (req,res)=>{
   console.log(`server running on port ${port}`); 
});

//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true }));

// connecting mongodb using mongoose
const db = require("./models");
const { isValidObjectId } = require("mongoose");
const Role = db.role;
const Video = db.video;
const Mongourl = process.env.MONGODB_URL;
db.mongoose.connect(Mongourl, {
   useNewUrlParser:true,
   useUnifiedTopology:true

})
.then( () => {
  console.log("MongoDB connected succcessfully");
  initial();
})
.catch ( err => {
  console.error("Connection error: ", err);
  process.exit();
});


app.get('/', (req,res)=>{
  res.send("Welcome to instagram stories");
});

// initialising Role Collection with some 3 roles.

function initial (){
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  }); 


}
