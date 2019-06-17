exports.contact_Page = function(req, res) {
    res.render('contactUS/contact',{ user: req.user});
};

