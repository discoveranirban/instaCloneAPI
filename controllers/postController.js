const validationHandler = require('../validations/validatonHandler');
const Post= require("../models/post");

exports.index = async (req,res) => {
    try {
        const posts= await Post.find().sort({ createdAt:-1 });
        res.send(posts);
    }
    catch(err){
        next(err);
    }
};

exports.show = async (req,res) => {
    try {
        const post= await Post.findOne({
            _id:req.params.id
        });
        res.send(post);
    }
    catch(err){
        next(err);
    }
};


exports.store = async (req,res,next) => {
    try{
        validationHandler(req);
        
        let post=new Post();
        post.description=req.body.description;
        post.image=req.file.filename;
        post=await post.save();
        res.send(post);
    }catch(err){
        next(err)
    }
};

exports.update = async (req,res,next) => {
    try{
        validationHandler(req);
        
        let post=await Post.findById(req.params.id);
        post.description=req.body.description;
        post=await post.save();
        res.send(post);
    }catch(err){
        next(err)
    }
};

exports.delete = async (req,res,next) => {
    try{
        
        let post=await Post.findById(req.params.id);
        await post.delete();
        res.send({message:"Success"});
    }catch(err){
        next(err)
    }
};