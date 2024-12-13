const mongoose = require("mongoose");

connectionString ="mongodb+srv://mohammadnadeem9825:oKsKKVVsffZ33dz8@dmart.pqjtv.mongodb.net/dmart?retryWrites=true&w=majority&appName=Cluster0";

const connectDatabase = () => {
    console.log("Database connected")
  return mongoose.connect(connectionString);
};

module.exports={connectDatabase};