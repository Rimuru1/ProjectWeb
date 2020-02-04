var mongoose = require('mongoose');
var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    id_auction: {type: String, require: true},
    user:{type: String, require: true},
    fname: { type: String  ,require: true},
    lname: { type: String  ,require: true},
    email: { type: String ,require: true},
    address: { type: String ,require: true},
    price: { type: Number, require: true}
})
 
var FeedbackModel = mongoose.model('bitprice', FeedbackSchema);
module.exports = FeedbackModel;