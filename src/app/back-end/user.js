var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    fname: { type: String  ,require: true},
    lname: { type: String  ,require: true},
    email: { type: String, unique: true  ,require: true},
    username: { type: String ,unique: true ,require: true},
    password: { type: String  ,require: true},
    type: { type: String, required: true  ,require: true}
    

})

var FeedbackModel = mongoose.model('members', FeedbackSchema);
module.exports = FeedbackModel;
