var mongoose = require('mongoose');
var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    email: {type: String  ,require: true},
    type: {type: String  ,require: true},
    productName: { type: String  ,require: true},
    price: { type: Number  ,require: true},
    image: { type: String  ,require: true}
})
 
var FeedbackModel = mongoose.model('product', FeedbackSchema);
module.exports = FeedbackModel;

