const User = require('../../models/userModel');

exports.updateUser = async(req,res)=>{
    var id = req.body._id;
    const update = await User.updateUser(id,req);
    res.send(update)
}