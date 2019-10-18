var express = require('express');
var cors = require('cors');
var path=require('path');
var bodyParser = require("body-parser");
var app = express();
var http=require('http');
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static('./app'));
var bodyParser=require('body-parser');
var fs=require('fs');
var port = process.env.PORT ;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/Sample.html'))
})

app.get('/JobApplication',function(req,res){
        res.sendFile(path.join(__dirname+'/JobApplication.html'))
})
app.get('/AdminRegister',function(req,res){
    res.sendFile(path.join(__dirname+'/AdminRegister.html'))//Admin register
})
app.get('/AdminLogin',function(req,res){
    res.sendFile(path.join(__dirname+'/AdminLogin.html'))
})
app.get('/HRNewJobPost',function(req,res){
   res.sendFile(path.join(__dirname+'/HRNewJobPost.html'))//new job
})
app.get('/UpdateStatus',function(req,res){
    res.sendFile(path.join(__dirname+'/UpdateStatus.html'))//Update status
})
app.get('/Enquiries',function(req,res){
    res.sendfile(path.join(__dirname+'/Enquiries.html'))//Enquiries
})
app.get('/ForgotPassword', function(req,res){
    res.sendFile(path.join(__dirname+'/ForgotPassword.html'))//Forgot password
})
app.get('/ForgotPasswordSet',function(req,res){
    res.sendFile(path.join(__dirname+'/ForgotPasswordSet.html'))//ForgotPasswordSet
})
app.get('/ResetPassword', function(req,res){
    res.sendfile(path.join(__dirname+'/ResetPassword.html'))//reset password
})
app.get('/ResetPasswordSet',function(req,res){
    res.sendFile(path.join(__dirname+'/ResetPasswordSet.html'))//Reset password set
})
app.get('/AdminHome',function(req,res){
    res.sendFile(path.join(__dirname+'/AdminHome.html'))
})
app.get('/CandidateProfile',function(req,res){
    res.sendFile(path.join(__dirname+'/CandidateProfile.html'))
})
app.get('/AllJobs',function(req,res){
    res.sendFile(path.join(__dirname+'/AllJobs.html'))
})
app.get('/GetCandidatejobs',function(req,res){
    res.sendFile(path.join(__dirname+'/GetCandidatejobs.html'))
})
app.get('/GetJobData',function(req,res){
    res.sendFile(path.join(__dirname+'/GetJobData.html'))
})

var Users = require('./app/Users');
{
app.use('/users',Users);
}
 var AdminRegister=require('./app/AdminRegister');
{
 app.use('/AdminRegister', AdminRegister);
}
var AdminLogin=require('./app/AdminLogin');{
    app.use('/AdminLogin',AdminLogin)
}
var CandidateProfile=require('./app/CandidateProfile');{
    app.use('/CandidateProfile',CandidateProfile)
}
var HRNewJobPost=require('./app/HRNewJobPost');{
    app.use('/HRNewJobPost',HRNewJobPost)
}
var ActivePositions= require('./app/ActivePositions');{
app.use('/ActivePositions',ActivePositions)
}
var UpdateStatus=require('./app/UpdateStatus');{
    app.use('/UpdateStatus',UpdateStatus);
}
var AllJobs=require('./app/AllJobs');
{
    app.use('/AllJobs',AllJobs);
}
var Enquiries=require('./app/Enquiries');{
    app.use('/Enquiries',Enquiries);
}

var ForgotPassword=require('./app/ForgotPassword');
{
app.use('/ForgotPassword',ForgotPassword);
}
var ForgotPasswordSet= require('./app/ForgotPasswordSet');{
app.use('/ForgotPasswordSet',ForgotPasswordSet)
}
var ResetPassword=require('./app/ResetPassword');{
    app.use('/ResetPassword',ResetPassword)
}
var ResetPasswordSet=require('./app/ResetPasswordSet');{
    app.use('/ResetPasswordSet',ResetPasswordSet)
}
var SearchJob=require('./app/SearchJob');{
    app.use('/SearchJob',SearchJob)
}
var ViewEnquiries=require('./app/ViewEnquiries');{
    app.use('/ViewEnquiries',ViewEnquiries)
}
var GetCandidateJobs=require('./app/GetCandidateJobs');{
app.use('/GetCandidateJobs',GetCandidateJobs)
}

app.listen(port,function(){
    console.log("Server is running on port: "+port);
})





