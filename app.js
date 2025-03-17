const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())

users = [
    {'id':1,'name':'John','marriage':true,'salary':100000},
    {'id':2,'name':'Doe','marriage':false,'salary':500},
    {'id':3,'name':'Aung','marriage':false,'salary':2000},
    {'id':4,'name':'Thu','marriage':true,'salary':300},
    {'id':5,'name':'Heain','marriage':true,'salary':4000},
]
app.get('/names',function (req,res){
    res.json({name:['one','two','three']});
})

app.get('/html',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/post',function(req,res){
    console.log(req.body);
    res.json({message:'success',data:req.body});
})

app.get('/users',function(req,res){
    res.json({status:true,data:users});
})

app.post('/users',function(req,res){
    $users.push(req.body);
    res.json({status:true,data:users})
})

app.get('/users/:name',function(req,res){
    name = req.params.name;
    console.log(name);
    user = users.find((user)=>{
        return user.name === name;
    });
    if(user){
        res.json({status:true,data:user});
    }else{
        res.json({status:false,message:'User not found'});
    }
})

app.patch('/users',function(req,res){
    usrname = req.body.name;
    salary = req.body.salary;
    user =users.find((usr)=>{
        return usr.name === usrname;
    })
    if(user){
        user.salary = salary;
        res.json({status:true,data:users});
    }
})



app.listen(3000,()=>{
    console.log("Server started on port 3000");
});