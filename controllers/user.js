let {getCon} = require('../utils/db');
const {ObjectId} = require('mongodb');

const all = (req,res)=>{
    let users = [];
    // getCon().collection('users').find().project({name:1}).forEach((user)=>{users.push(user)})
    // getCon().collection('users').find({$and:[{age:{$eq:24}},{address:{$eq:'Mandalay'}}]}).forEach((user)=>{users.push(user)})
    // getCon().collection('users').find({name:{$regex:/^Aung/}}).forEach((user)=>{users.push(user)})
    getCon().collection('users').find({$where:"this.age < 20"}).forEach((user)=>{users.push(user)})
        .then(()=>{
            res.status(200).json({success:true,data:users})
        })
}

const getByName = (req,res)=>{

}

const create = (req,res)=>{
    let obj = req.body;
    obj.created_at = new Date();
    getCon().collection('users').insertOne(obj)
    .then(()=>{
        res.status(200).json({success:true,data:obj})
    }).catch(err=>{
        res.status(200).json({success:true,data:err})
    })
}

const createMany = (req,res)=>{
    let obj = req.body.users;
    getCon().collection('users').insertMany(obj)
    .then(()=>{
        res.status(200).json({success:true,data:obj})
    }).catch(err=>{
    res.status(200).json({success:true,data:err})
    })
}

const update = (req,res)=>{
  let id = ObjectId.createFromHexString(req.params.id);
  let obj = req.body;
  getCon().collection('users')
      .updateOne({_id: id}, {$set: obj})
      .then((res)=>{
          res.status(200).json({success:true,message:"success"})
      })
      .catch(err=>{
          res.status(200).json({success:true,data:err})
      });
}

const destroy = (req,res)=>{
 let id = ObjectId.createFromHexString(req.params.id);
 getCon().collection('users')
     .deleteOne({_id:id})
     .then((res)=>{
         res.status(200).json({success:true,message:"success"})
     })
     .catch(err=>{
         res.status(200).json({success:true,data:err})
     })
}


module.exports={
    all,
    create,
    createMany,
    getByName,
    update,
    destroy,
}