

"use strict";


const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;



const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get all the recipes 
const getAllRecipes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("recipe");
    const resultRecipes = await db.collection("recipes").find().toArray();

    if (resultRecipes) {
      return res.status(200)
        .set('Access-Control-Allow-Origin', '*')
        .json({
          status: 200,
          data: resultRecipes,
          message: "Got recipes !",
        });
    } else {
      res.status(400).json({
        status: 400,
        data: resultRecipes,
        message: "Error: Items not found.",
      });
    }

    await client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: "Internal Server Error",
    });
    await client.close();
  }
};
//Gets a single recipe collection

const getRecipeById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params._id;

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("recipe");
    const recipeItem = await db.collection("recipes").findOne({ _id: new ObjectId(_id) });

    console.log("Recipe:", recipeItem); 

    recipeItem
    
      ? res.status(200).json({ status: 200, _id, data: recipeItem })
      : res.status(404).json({
          status: 404,
          _id,
          message: "Single recipe not found",
          data: recipeItem,
        });
    await client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: "Internal Server error",
    });
    await client.close();
  }
};
// get random recipe for home 
const getRandomRecipes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const numberOfRecipes = parseInt(req.query.count) || 3; 

  try {
    await client.connect();
    const db = client.db("recipe");
    const randomRecipes = await db
      .collection("recipes")
      .aggregate([{ $sample: { size: numberOfRecipes } }])
      .toArray();

    if (randomRecipes) {
      return res.status(200)
        .json({
          status: 200,
          data: randomRecipes,
          message: "Got random recipes!",
        });
    } else {
      res.status(400).json({
        status: 400,
        data: randomRecipes,
        message: "Error: Items not found.",
      });
    }

    await client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: "Internal Server Error",
    });
    await client.close();
  }
};
//get all the name of the recipe
const getRecipeNames = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("recipe");
    const recipeNames = await db.collection("recipes").find({}, {projection: {_id: 1, name: 1}}).toArray();

    console.log("Recipe Names:", recipeNames); 

    res.status(200).json({ status: 200, data: recipeNames });
    await client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: "Internal Server error",
    });
    await client.close();
  }
};



module.exports = {
  getAllRecipes,
  getRecipeById,
  getRandomRecipes,
  getRecipeNames,
};
