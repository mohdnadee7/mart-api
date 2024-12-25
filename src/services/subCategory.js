
const subCategory  = require('../entites/subCategory');
const cloud  = require('../services/cloud');


const getSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategory.find({}).limit(6);
    
   const listCategory = subCategories.map(subCategory =>({
    _id: subCategory._id,
    DisplayName : subCategory.DisplayName,
    SubCategory : subCategory.SubCategory,
    CategoryId : subCategory.CategoryId,    
    ImageUrl : cloud.url(subCategory.ImageUrl),
   }));
  res.status(200).json(listCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    getSubCategories
}

