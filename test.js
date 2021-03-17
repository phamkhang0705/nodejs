const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=kaangkun_blog&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true',{useNewUrlParser:true});
BlogPost.create({
    title:'KaangKun title',
    body:'Day la body'
}),(error,blogpost)=>{
    console.log(error,blogpost);
};