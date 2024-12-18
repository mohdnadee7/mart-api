
const express = require('express');
const subCategory  = require('../entites/subCategory');
const cloud  = require('../services/cloud');


const getSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategory.find({});
   
  res.status(200).send(subCategories);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    getSubCategories
}

