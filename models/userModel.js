const mongoose = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const saltRounds = 10;
const Schema = mongoose.Schema;
const USERS = 'users';
var mail, host, link;


const config = {
    service: 'gmail',
    auth: {
        user: 'huyho.hcmus@gmail.com',
        pass: 'huyhuydum'
    }
};

const verifyEmail = async (req, res, id) => {
    host = req.get('host');
    link = "http://" + req.get('host') + "/user/verify?id=" + id;
    mail = {
        from: 'huyho.hcmus@gmail.com',
        to: req.body.email,
        subject: 'Chào mừng bạn đến với fashion group!!! ',
        text: link,
    };
    transporter.sendMail(mail, function (err, info) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log('Email sent: ' + info.response);
            res.render('user/login', { message: 'Xác thực email để sử dụng tài khoản' });
        }
    })
}
const transporter = nodemailer.createTransport(config);
/**
 *
 * @param username
 * @param password
 * @return user
 */

const user = new Schema({
    name: String,
    sdt: Number,
    email: String,
    username: String,
    pass: String,
    address: String,
    gender: String,
    date: String,
    active: {
        type: Boolean,
        default: false
    },
    activeToken: String

}, { collection: USERS });
// danh sách
const list = mongoose.model(USERS, user);


// đăng kí tài khoản
const saveUser = async (newuser, req, res) => {
    const NewUser = new list(newuser);
    bcrypt.hash(newuser.pass, saltRounds, function (err, hash) {
        NewUser.pass = hash;
        NewUser.save(err => {
            verifyEmail(req, res, NewUser._id);
        });
    })
}

const verifyAcc = async (req, res) => {
    console.log(req.protocol + ":/" + req.get('host'));
    if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
        console.log("Domain is matched. Information is from Authentic email");
        list.findById(req.query.id).then(userFound => {
            if (!userFound) {
                userFound.active = false;
                res.redirect('/user/register')
            }
            else{
            userFound.active = true;
            userFound.save(err => { })
            res.redirect('/user/login')
        }})
    }
    else {
        res.end("<h1>Request is from unknown source");
    }
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
    else {
        if (user.active == false) {
            return false
        }
        return await bcrypt.compare(password, user.pass);
    }
};


// kiểm tra email
const checkEmail = async (email) => {
    const user = await getUser(email);
    if (!user)
        return true;
    return false;
}


const saveNewPass = async (req,res)=>{
    const checkUser = req.user;
    const curPass = req.body.currentpass;
    const newPass = req.body.newPass;
    const isValidPass = await validPassword(checkUser.email,curPass);
    if (!isValidPass){
        return false;
    }
    else{
        list.findById(checkUser._id).then(userFound => {
            bcrypt.hash(newPass, saltRounds, function (err, hash) {
                userFound.pass = hash;
                userFound.save(err => {});
            })
        })
    }

}

const updateUser = async (id, req) => {
    return await list.findByIdAndUpdate(id, {
        name: req.body.name,
        sdt: req.body.sdt,
        username: req.body.username,
        address: req.body.address,
        gender: req.body.gender,
        date: req.body.date,
    })
}


module.exports = {
    list: list,
    saveUser: saveUser,
    getUser: getUser,
    validPassword: validPassword,
    checkEmail: checkEmail,
    updateUser: updateUser,
    verifyAcc: verifyAcc,
    saveNewPass:saveNewPass
}



