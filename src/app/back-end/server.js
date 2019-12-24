const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const bodyParser = require('body-parser');
require('./api');
const cors = require('cors');
const FeedbackModel = require('./user');
const User = require('./user');
const Product = require('./product');
const Basket = require('./basket');
const Auction = require('./auction');


const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.listen(PORT, function () {
    console.log("server is running " + PORT);
})


app.get('/', (req, res) => {
    res.end("root");
});


app.get('/home', (req, res) => {
    res.end("home");

});
app.post('/register', (req, res) => {

    let userData = req.body
    let user = User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json(userData)
        }
    })

});

app.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (error, user,) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).json(user)
                }
        }
    })
});

app.post('/product', (req, res) => {

    let productData = req.body
    let product = Product(productData)
    product.save((error, addproduct) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: addproduct._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json(productData);
        }
    })

});
app.post('/basket', (req, res) => {

    let basketData = req.body
    let basket = Basket(basketData)
    basket.save((error, createBasket) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: createBasket._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json(basketData)
        }
    })

});
app.post('/auction', (req, res) => {

    let auctionData = req.body
    let auction = Auction(auctionData)
    auction.save((error, createAuction) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: createAuction._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json(auctionData)
        }
    })

});
// 

app.get('/product',(req, res) => {
    Product.find({} , (err,product) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(product);
    })

});
app.get('/product/:email',(req, res) => {
    Product.find({email:req.params.email} , (err,product) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(product);
    })

});

app.get('/store',(req, res) => {
    User.find({type:req.params.type=2} , (err,user) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(user);
    })

});
app.get('/store/:email',(req, res) => {
    User.find({email:req.params.email} , (err,user) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(user);
    })

});
app.get('/userstore/:email',(req, res) => {
    User.find({email:req.params.email} , (err,user) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(user);
    })

});
app.get('/basket/:email',(req, res) => {
    Basket.find({email:req.params.email} , (err,userData) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(userData);
    })
})

app.get('/products/:emailStore',(req, res) => {
    Basket.find({emailStore:req.params.emailStore} , (err,userData) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(userData);
    })
})
// delete function
app.delete('/delete/myProduct/:id',(req, res) => {
    Product.findOneAndRemove({_id:req.params.id}, (err, product) => {
        if(err){
            res.send('NOOOOOOOOOO!!!!');
            next();
        }
        res.send('successfuly');
    })
    
})
app.delete('/delete/productMybasket/:id',(req, res) => {
    Basket.findOneAndRemove({_id:req.params.id}, (err, product) => {
        if(err){
            res.send('NOOOOOOOOOO!!!!');
            next();
        }
        res.send('successfuly');
    })
    
})

app.delete('/delete/Mybasket',(req, res) => {
    Basket.remove({}, (err, product) => {
        if(err){
            res.send('NOOOOOOOOOO!!!!');
            next();
        }
        res.send('successfuly');
    })
    
})