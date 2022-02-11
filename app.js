const express = require("express");
const app = express()
const path = require("path");
const PORT = 3030 ;

app.use(express.static("public"));

app.get("/Babbege", function(req, res){
    res.sendFile(path.join(__dirname,"/views/babbege.html"))

})
app.get("/berners-lee",function(req, res){
    res.sendFile(path.join(__dirname,"/views/berners-lee.html"))

})

app.get("/clarke",function(req, res){
    res.sendFile(path.join(__dirname,"/views/clarke.html"))
})

app.get("/hamilton",function(req, res){
    res.sendFile(path.join(__dirname,"/views/hamilton.html"))
})

app.get("/index",function(req, res){
    res.sendFile(path.join(__dirname,"/views/index.html"))
})


app.get("/lovelace",function(req, res){
    res.sendFile(path.join(__dirname,"/views/lovelace.html"))

})

app.get("/turing", function(req, res){
    res.sendFile(path.join(__dirname,"/views/turing.html"))
})





app.listen(PORT,function(){
    console.log(`
    servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})