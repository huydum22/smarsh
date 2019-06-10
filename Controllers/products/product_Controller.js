

const product = require('../../models/product_model')

//GET all item
exports.men_list = async (req, res) => {
    await product.listProduct('nam','men','men product',res);
};

exports.women_list = async (req, res) =>{
    await product.listProduct('nu','women','women product',res);
};

exports.casuals_list = async (req, res)=> {
    await product.listProduct('giandi','casuals','casuals product',res);
};

exports.cos_list = async (req, res)=> {
    await product.listProduct('mypham','cosmetics','cosmetics product',res);
};

exports.deos_list = async (req, res)=> {
    await product.listProduct('nuochoa','deos','deos product',res);
};

exports.formals_list = async (req, res) =>{ 
    await product.listProduct('congso','formals','formals product',res);
};

exports.hair_list = async (req, res) =>{
    await product.listProduct('toc','haircare','haircare product',res);
};

exports.hand_list = async (req, res) =>{
    await product.listProduct('tui','handbags','handbags product',res);
};

exports.inner_list = async (req, res) =>{
    await product.listProduct('dolot','inner','inner product',res);
};

exports.jewe_list = async (req, res)=> {
    await product.listProduct('trangsuc','jewellery','jewellery product',res);
};

exports.kids_list = async (req, res) =>{
    await product.listProduct('treem','kids','kids product',res);
};

exports.night_list = async (req, res)=> {
    await product.listProduct('ngu','night','night product',res);
};

exports.party_list = async (req, res) =>{
    await product.listProduct('datiec','party','party product',res);
};

exports.shoes_list = async (req, res) =>{
    await product.listProduct('giay','shoes','shoes product',res);
};

exports.skin_list = async (req, res) =>{
    await product.listProduct('csda','skincare','skincare product',res);
};

exports.watches_list = async (req, res) =>{
    await product.listProduct('dongho','watches','watches product',res);
};


//VIEW single product
exports.viewProduct = async  (req, res) =>{
    
    await product.viewProduct(res,req.params.id);
}


exports.sortByColor = function (req, res) {
    res.send('sort by color')
}
exports.sortBySize = function (req, res) {
    res.send('sort by size')
}
exports.sortByCategory = function (req, res) {
    res.send('sort by category')
}