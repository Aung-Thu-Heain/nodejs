const {MongoClient} = require('mongodb')

var url = "mongodb://localhost:27017/media";
let conn;
const connectDB = (cb) => MongoClient.connect(url)
    .then((client)=>{
        client.db();
        conn = client.db();
        cb();
    })
    .catch((err) => {
        cb(err);
    });

const getCon = ()=>conn;

module.exports = {
    connectDB,
    getCon,
}