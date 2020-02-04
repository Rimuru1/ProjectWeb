var mongoose = require('mongoose');
var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    email: {type: String  ,require: true},
    username: {type: String  ,require: true},
    type: {type: String  ,require: true},
    productName: { type: String  ,require: true},
    date: {type: String ,require: true},
    endTime : { type : String, require: true},
    price: { type: Number  ,require: true},
    image: { type: String  ,require: true}
})
 
var FeedbackModel = mongoose.model('productAuction', FeedbackSchema);
module.exports = FeedbackModel;