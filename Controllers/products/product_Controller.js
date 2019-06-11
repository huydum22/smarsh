const product = require('../../models/product_model')
var bodyParser = require('body-parser')

    //, title, imageOffer, banner, res
    //GET all item

exports.cloth_List = async(req, res) => {
    var page = req.params.page || 1;
    const cate = req.params.cate;
    product.listProduct1value(cate,page,'/images/offer2.jpg','sub-banner my-banner3',res)
}

exports.search_list = async (req, res)=>{
    var page = req.params.page || 1;
    var text = req.query.search ;
    product.searchProduct(text,page,'/images/offer2.jpg','',res);
}
exports.search_list1 = async (req, res)=>{
    var page = req.params.page || 1;
    var text = req.params.text;
    product.searchProduct(text,page,'/images/offer2.jpg','',res);
}


exports.men_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('men',page,'/images/offer2.jpg','sub-banner my-banner3',res)
};

exports.women_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('women',page,'/images/offer2.jpg','sub-banner my-banner2',res)
};

exports.casuals_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('casuals',page,'/images/offer.jpg','sub-banner my-banner3',res)
};

exports.cos_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('cosmetics',page,'/images/offer8.jpg','',res)

    
};

exports.deos_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('deos',page,'/images/offer7.jpg','',res)

};

exports.formals_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('formals',page,'/images/offer2.jpg','sub-banner my-banner3',res)

};

exports.hair_list = async(req, res) => {
    var page = req.params.page || 1;
    product.listProduct1value('men',page,'/images/offer9.jpg','',res)

};

exports.hand_list = async(req, res) => { 
       var page = req.params.page || 1;

    product.listProduct1value('handbags',page,'/images/offer4.jpg','',res)

   
};

exports.inner_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('inner',page,'/images/offer13.jpg','sub-banner my-banner3',res)

};

exports.jewe_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('jewellery',page,'/images/offer6.jpg','',res)


};

exports.kids_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('kids',page,'/images/offer3.jpg','sub-banner my-banner2',res)
};

exports.night_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('night',page,'/images/offer14.jpg','sub-banner my-banner2',res)

   
};

exports.party_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('party',page,'/images/offer12.jpg','sub-banner my-banner2',res)
};

exports.shoes_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('shoes',page,'/images/offer11.jpg','',res)

};

exports.skin_list = async(req, res) => {  
    var page = req.params.page || 1;
  
    product.listProduct1value('skincare',page,'/images/offer10.jpg','',res)

};

exports.watches_list = async(req, res) => {
    var page = req.params.page || 1;

    product.listProduct1value('watches',page,'/images/offer5.jpg','',res)

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