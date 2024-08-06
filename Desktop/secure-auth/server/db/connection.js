require('dotenv').config();
const MONGOURI = process.env.MONGOURI
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(MONGOURI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
