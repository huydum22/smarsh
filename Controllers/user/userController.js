const user = require('../../models/userModel');

exports.login_page = function (req, res) {
    res.render('user/login',{message: req.flash('error')});
};

exports.register_page = function (req, res) {
    res.render('user/register');
};

exports.addAccount = function (req, res) {
    user.saveUser(req.body);
    res.redirect('/user/login');
};

exports.profile_page = function (req, res) {
    const findUser = user.list;
    findUser.findById(req.params.id).then(userFound => {
        if (!userFound) {
            res.send('that bai');
        }
        res.render('user/profile', { title: 'Thông tin tài khoản', userFound , user: req.user})
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

