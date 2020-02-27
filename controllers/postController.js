const validationHandler = require('../validations/validatonHandler');

exports.index = (req,res) => {
    res.send({message:"hi"});
};

exports.store = (req,res,next) => {
    try{
        validationHandler(req);
        res.send({message:"The name is:"+req.body.name});
    }catch(err){
        next(err)
    }
};
