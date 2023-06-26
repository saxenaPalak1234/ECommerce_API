// const mongoose = require('mongoose');

// mongoose.connect(process.env.Mongo_URL).then(()=>{
// console.log("Connected mongoDB 😊")
// }).catch((err)=>{
//     console.log(err)
//     console.log("Error in Connecting  mongoDB 😐")
// })
const mongoose = require('mongoose');

const db = process.env.Mongo_URL;

mongoose.connect(db)
.then(()=> console.log('Db Is connected'))
.catch((err)=>console.log('Error connected to Db',err));

module.exports = db;