var mongoose = require('mongoose');
var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    email: {type: String},
    type: {type: String},
    productName: { type: String},
    price: { type: String},
    image: { type: String}
})
 
var FeedbackModel = mongoose.model('product', FeedbackSchema);
module.exports = FeedbackModel;

