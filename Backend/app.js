const express = require('express');
const BookData = require('./src/model/bookdata');
const AuthorData = require('./src/model/authordata');
const UserData = require('./src/model/userdata');
const cors = require('cors');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken'); 
const {  name } = require('ejs');
const app = new express();



app.use(cors());
app.use(bodyparser.json());
username="admin@gmail.com"
password="12345678"

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }




app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

app.get('/books', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    BookData.find().then (function(books){
        res.send(books);
    });
});

app.get('/authors', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    AuthorData.find().then (function(authors){
        res.send(authors);
    });
});




app.get('/book/:id',(req,res)=>{
    const id=req.params.id;
    BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    })
})

app.get('/author/:id',(req,res)=>{
    const id=req.params.id;
    AuthorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    })
})







app.post('/books/insert',verifyToken,function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    
    const file = req.file
    console.log(req.body);
    var book={
         title:req.body.book.title,
         author:req.body.book.author,
         genre:req.body.book.genre,
         image:req.body.book.image
    }
    var book=new BookData(book);
    book.save();
});

app.post('/authors/insert',verifyToken,function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    
    console.log(req.body);
    var author={
         name:req.body.author.name,
         genre:req.body.author.genre,
         book1:req.body.author.book1,
         book2:req.body.author.book2,
         book3:req.body.author.book3,
         image:req.body.author.image
    }
    var author=new AuthorData(author);
    author.save();
});



app.post('/login', (req, res) => {
    let userData = req.body
    

        if(username == userData.username && password == userData.password)
        {
            let payload = {subject: username+password}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})  
        }
        else {
            UserData.findOne({email: userData.username, password1: userData.password})
            .then(function(userdata){
                if(userdata != null){
                    
                    let payload = {subject: userData.username+userData.password}
                    let token1 = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token1})  

                }
                else{
                    msg="Try Again";
                    res.status(200).send({msg});
                };
            })
        }
      
    })

app.post('/signup',(req,res)=>{

    

    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    
    console.log(req.body);
    var user={
         email:req.body.email1,
         number:req.body.number1,
         password1:req.body.password1,
         password2:req.body.password2
    }
    var user=new UserData(user);
    user.save();


})




 app.put('/books/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title=req.body.title,
    author=req.body.author,
    genre=req.body.genre,
    image=req.body.image
   BookData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "title":title,
                            "author":author,
                        "genre":genre,
                    "image":image
                }})
   .then(function(){
       res.send();
   })
 })

 app.put('/authors/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    aname=req.body.name,
    genre=req.body.genre,
    book1=req.body.book1,
    book2=req.body.book2,
    book3=req.body.book3,
    image=req.body.image
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "name":aname,
                        "genre":genre,
                        "book1":book1,
                        "book2":book2,
                        "book3":book3,
                    "image":image
                }})
   .then(function(){
       res.send();
   })
 })




  app.delete('/books/remove/:id',(req,res)=>{
   
    id = req.params.id;
    BookData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

  app.delete('/authors/remove/:id',(req,res)=>{
   
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

app.listen(3000);


