// module/Client.js
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:String,
    mobileNo:String,
    message:String,
    otp:String
});

module.exports = mongoose.model('Client', ClientSchema);
