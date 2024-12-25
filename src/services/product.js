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

const getCartProductById = async (productIds) => {
  try {
    const productList = await product.find({ _id: { $in: productIds } });
    const productLists = await productMapping(productList) 
    return productLists;
  } catch (error) {
    throw new Error("Error fetching products by IDs: " + error.message);
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await product.findOne({ _id:req.query.id });
    const productmaped = await productMapping(product) 
    res.status(200).json(productmaped);
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
  getCartProductById,
  getProductById
}
