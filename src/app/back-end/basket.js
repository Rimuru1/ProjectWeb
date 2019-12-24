var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    id_product: { type: String  ,require: true},
    email: { type: String  ,require: true},
    emailStore: { type: String  ,require: true},
    productName: { type: String,require: true },
    price: { type: Number ,require: true},
    image: { type: String  ,require: true}

})

var FeedbackModel = mongoose.model('UserProduct', FeedbackSchema);
module.exports = FeedbackModel;