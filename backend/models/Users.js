const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    transaction_history: [{type: String}],
    userType: {type: String, required: true}
});

module.exports = mongoose.model('Users', userSchema);