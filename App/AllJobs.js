var express = require('express');
var users = express.Router();
var port = process.env.PORT || 3000;
var database=require('../app/Database/DBConnections');
var multer=require('multer');
var path=require('path');
process.env.secretkey='zyclyx';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./uploads/Images')
    },
    filename: function (req, file, cb) {
        var file=file.originalname;
      cb(null,file )
    }
  })
  var appData={
    "error":1,
    "data":""
}
   
  var upload = multer({ storage: storage })

  users.get('/AllJobs',upload.single(''),function(req,res){
      database.connection.getConnection(function(err,connection){
          if(err){
              console.log(err)
              res.send('error while connecting database')
          }
          else{
              connection.query('select jobtitle from jobs',function(err,data){
                  if(err){
                      console.log(err)
                      res.send('Problem in database');
                  }
                  else{
                      console.log(data)
                     // res.redirect('/AllJobs');
                      //res.sendFile(path.join(__dirname+'/AllJobs.html'))
                      res.send(data);
                  }
              })
              
          }
      })
  })
  module.exports=users;
