var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    fname: { type: String},
    lname: { type: String},
    email: { type: String, unique: true},
    username: { type: String},
    password: { type: String},
    type: { type: String, required: true}
    

})

var FeedbackModel = mongoose.model('members', FeedbackSchema);
module.exports = FeedbackModel;
