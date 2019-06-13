const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;
const USERS = 'users';

/**
 *
 * @param username
 * @param password
 * @return user
 */

const user = new Schema({
    name        :String,
    sdt         :Number,
    email       :String,
    username    :String,
    pass        :String,
    address     :String,
    gender      :String,
    date        :String,

},{collection: USERS});
// danh sách
const list = mongoose.model(USERS,user);


// đăng kí tài khoản
const saveUser = async (newuser) =>{
    const NewUser = new list(newuser);
    bcrypt.hash(newuser.pass,saltRounds,function (err,hash){
        NewUser.pass = hash;
        NewUser.save(err=>{});
    })
}


// lấy người dùng
const getUser = async (email) => {
    return await list.findOne({ 'email': email });
};

//kiểm tra password
const validPassword = async (email, password) => {
    const user = await getUser(email);
    if (!user)
        return false;
    return await bcrypt.compare(password, user.pass);
};


// kiểm tra email
const checkEmail = async (email) => {
    const user = await getUser(email);
    if (!user)
        return true;
    return false;
}


module.exports = {
    list : list,
    saveUser : saveUser,
    getUser : getUser,
    validPassword : validPassword,
    checkEmail : checkEmail
}



