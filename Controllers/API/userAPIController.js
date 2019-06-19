const User = require('../../models/userModel');

exports.updateUser = async(req,res)=>{
    var id = req.body._id;
    const update = await User.updateUser(id,req);
    res.send(update)
}

exports.checkEmail = async (req, res)=>{
    const userExist = await User.checkEmail(req.query.email);
    res.json(userExist);

}