exports.Faq_page = function(req, res) {
    res.render('contactUS/faq',{ user: req.user});
};