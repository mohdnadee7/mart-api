
const express = require('express');
const category  = require('../entites/category');
const cloud  = require('../services/cloud');


const getCategories = async (req, res) => {
  try {
    const categories = await category.find({});
   
  res.status(200).send(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getCategories
}

