exports.about_page = function(req, res) {
    res.render('contactUS/about',{ user: req.user});
};

