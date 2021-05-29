const express = require('express');

const app  = express();


app.use(express.static("public"));

app.get('/home', function(req, res){
      res.send("welcome to home page");

})

app.listen(5500, function(){
    console.log("server started at port 5500");
})
