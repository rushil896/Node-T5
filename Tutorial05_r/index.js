var http = require('http')
var mongoose = require('mongoose')
var express = require('express')
var route = require('./route')

var bodyParser =require('body-parser')
//mongodb+srv://pharmasite.uoqsu.mongodb.net/myFirstDatabase
//mongodb+srv://Rushil:a44TvRvfzLOysO4a@cluster0.ywmt1.mongodb.net/Info?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://pharmasite.uoqsu.mongodb.net/Info?retryWrites=true&w=majority').then(()=>{
    console.log('DB Connected....')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    http.createServer(app).listen(process.env.PORT||3000);
        console.log('server started')
})
