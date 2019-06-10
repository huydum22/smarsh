const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PRODUCTS = 'products';

const product = new Schema({
  ten       :String,
  ma        :String,
  gia       :String,
  imgSrc    :String,
  rate      :String,
  loaisp    :String,
  mausac    :String,
  kichco    :String,
  phanloai  :String,
  row1      :String,
  row2      :String,
  row3      :String,
  mota      :String,
  info      :String,
  danhgia   :String,
  help      :String

},{collection: PRODUCTS});

const list = mongoose.model(PRODUCTS,product);


const listProduct = async (name, renderlist, title,res)=>{
  const listproduct = list;
  await listproduct.find({'phanloai': name}).exec((err,Product)=>{
    if(err){
      console.log('that bai');
    }
    else{
      res.render('listProduct/'+renderlist,{title:title, Product});
    }
  })
}

const viewProduct = async (res,id) =>{
  const viewproduct = list;
  viewproduct.findById(id).then(productFound =>{
    if (!productFound)
    {
        res.send('that bai');
    }
    res.render('viewProduct/single',{title:'detail product', productFound})
})
}


module.exports = {
  list : list,
  listProduct : listProduct,
  viewProduct: viewProduct
}

//module.exports.listProduct = listProduct;
