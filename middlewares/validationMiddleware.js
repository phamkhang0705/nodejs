
module.exports = (req,res,next)=>{
    console.log(req.files);
    console.log(req.body);
    if(!req.files || req.files == null || req.body.title == null || req.body.body == null){
        return res.redirect('/posts/new');
    }
    next();
};