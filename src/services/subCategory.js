
const subCategory  = require('../entites/subCategory');
const cloud  = require('../services/cloud');


const getSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategory.find({});
   const listCategory = subCategories.map(categ =>({
    categoryId : categ.categoryId,
    imageUrl : cloud(categ.imageUrl),
    subCategory : categ.subCategory,
    displayName : categ.displayName
   }));
  res.status(200).json(listCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    getSubCategories
}

