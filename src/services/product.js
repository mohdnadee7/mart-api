const product  = require('../entites/product');
const cloud  = require('../services/cloud');


const getProducts = async (req, res) => {
  try {
    const productList = await product.find({}).limit(3);
    const productLists = await productMapping(productList) 
    res.status(200).json(productLists);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const productList = await product.find({ _id: { $in: res.body.productIds } });
    const productLists = await productMapping(productList) 
    
    res.status(200).json(productLists);
  } catch (error) {
    res.status(400).json(error);
  }
};
const productMapping = async (products) => {
  
    const productLists = products.map(product => ({
      _id:product._id,
      Price: product.Price,
      Name: product.Name,
      MRP: product.MRP,
      Description: product.Description,
      Quantity: product.Quantity,
      StockQuantity: product.StockQuantity,
      ImageUrl: cloud.url(product.ImageUrl)
 }));
 return productLists;
};

module.exports = {
  getProducts,
  getProductById
}
