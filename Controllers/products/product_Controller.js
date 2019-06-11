const product = require('../../models/product_model')
    //, title, imageOffer, banner, res
    //GET all item
    const perPage = 9;

exports.cloth_List = async(req, res) => {
    const listproduct = product.list;
    var page = req.params.page || 1
    await listproduct.find({ 'phanloai': req.params.cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer2.jpg', banner: 'sub-banner my-banner3', page, cate: 'cloth' });
        }
    })
}


exports.men_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'men';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer2.jpg', banner: 'sub-banner my-banner3', page, cate });
        }
    })
};

exports.women_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'women';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer2.jpg', banner: 'sub-banner my-banner2', page, cate });
        }
    })
};

exports.casuals_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'casuals';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer.jpg', banner: 'sub-banner my-banner3', page, cate });
        }
    })
};

exports.cos_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'cosmetics';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer8.jpg', banner: '', page, cate });
        }
    })
};

exports.deos_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'deos';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer7.jpg', banner: '', page, cate });
        }
    })
};

exports.formals_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'formals';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer2.jpg', banner: 'sub-banner my-banner3', page, cate });
        }
    })
};

exports.hair_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'haircare';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer9.jpg', banner: '', page, cate });
        }
    })
};

exports.hand_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'handbags';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer4.jpg', banner: '', page, cate });
        }
    })
};

exports.inner_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'inner';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer13.jpg', banner: 'sub-banner my-banner3', page, cate });
        }
    })
};

exports.jewe_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'jewellery';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer6.jpg', banner: '', page, cate });
        }
    })
};

exports.kids_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'kids';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer3.jpg', banner: 'sub-banner my-banner2', page, cate });
        }
    })
};

exports.night_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'night';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer14.jpg', banner: 'sub-banner my-banner2', page, cate });
        }
    })
};

exports.party_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'party';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer12.jpg', banner: 'sub-banner my-banner2', page, cate });
        }
    })
};

exports.shoes_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'shoes';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer11.jpg', banner: '', page, cate });
        }
    })
};

exports.skin_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'skincare';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer10.jpg', banner: '', page, cate });
        }
    })
};

exports.watches_list = async(req, res) => {
    var page = req.params.page || 1;
    const cate = 'watches';
    const listproduct = product.list;
    await listproduct.find({ 'phanloai': cate }).limit(perPage).skip((perPage * page) - perPage).exec((err, Product) => {
        if (err) {
            console.log('that bai');
        } else {
            res.render('listProduct/listProduct', { title: 'Clothing', Product, imageOffer: '/images/offer5.jpg', banner: '', page, cate });
        }
    })
};


//VIEW single product
exports.viewProduct = async(req, res) => {

    await product.viewProduct(res, req.params.id);
}


exports.sortByColor = function(req, res) {
    res.send('sort by color')
}
exports.sortBySize = function(req, res) {
    res.send('sort by size')
}
exports.sortByCategory = function(req, res) {
    res.send('sort by category')
}