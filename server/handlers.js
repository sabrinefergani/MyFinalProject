

"use strict";


const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;



const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const removeFromFavoriteRecipe = async (req, res) => {
  const { email, recipeId } = req.body;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("user");
    const usersCollection = db.collection("data");

    // check if user exists and if the dashboard array exists
    const result = await usersCollection.findOneAndUpdate(
      { email },
      { $pull: { "dashboard": recipeId } },
      { upsert: true }
    );

    if (result.ok) {
      res.status(200).json({ message: "Favorite recipe removed successfully" });
    } else {
      res.status(500).json({ message: "Failed to remove favorite recipe" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An unexpected error occurred" });
  } finally {
    await client.close();
  }
};

// get the dashboard
const getDashboardByEmail = async (req, res) => {
  const { email } = req.params;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("user");
    const usersCollection = db.collection("data");

    const user = await usersCollection.findOne({ email });

    if (user) {
      res.status(200).json({ id: user.dashboard });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An unexpected error occurred" });
  } finally {
    await client.close();
  }
};




//Add favorite recipe array 
const addToFavoriteRecipe = async (req, res) => {
  const { email, recipeId } = req.body;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("user");
    const usersCollection = db.collection("data");

    // check if user exists and if the dashboard array exists
    const result = await usersCollection.findOneAndUpdate(
      { email },
      { $addToSet: { "dashboard": recipeId } },
      { upsert: true }
    );

    if (result.ok) {
      res.status(200).json({ message: "Favorite recipe added successfully" });
    } else {
      res.status(500).json({ message: "Failed to add favorite recipe" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An unexpected error occurred" });
  } finally {
    await client.close();
  }
};


// Add this createUser function to your handler file
const createUser = async (req, res) => {
  const { email, displayName } = req.body;
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("user");
    const usersCollection = db.collection("data");

    const newUser = {
      email,
      displayName,
      dashboard: [],
    };

    const result = await usersCollection.insertOne(newUser);
    if (result.insertedCount > 0) {
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(500).json({ message: "Failed to create user" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An unexpected error occurred" });
  } finally {
    await client.close();
  }
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
  createUser,
  addToFavoriteRecipe,
  getDashboardByEmail,
  removeFromFavoriteRecipe,
};
