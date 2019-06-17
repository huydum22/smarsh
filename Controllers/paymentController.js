exports.payment_page = function(req, res) {
    res.render('Payment/payment',{ user: req.user});
};

