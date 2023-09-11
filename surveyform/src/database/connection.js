const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/survey', { useUnifiedTopology: true })
    .then(() => {
        console.log("MONGOOSE CONNECTION SUCCESSFULL");
    })
    .catch((err) => {
        console.log(" MONGOOSE CONNECTION FAILED");
        console.log(err);
    })