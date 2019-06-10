const user = require('../../models/userModel');

exports.login_page = function (req, res) {
    res.render('user/login');
};

exports.register_page = function (req, res) {
    res.render('user/register');
};

exports.addAccount = function (req, res) {
    user.saveUser(req.body);
    res.redirect('/user/login');
};

exports.profile_page = function (req, res) {
    user.findById("5cec601f7ed21a6b8e122e8b").then(userFound => {
        if (!userFound) {
            res.send('that bai');
        }
        res.render('user/profile', { title: 'Thông tin tài khoản', userFound })
    })
};

exports.logout_page = async (req, res) => {
    req.logout();
    res.redirect('/');
}

exports.checkEmail = async (req, res)=>{
    const userExist = await user.checkEmail(req.query.email);
    res.json(userExist);

}

