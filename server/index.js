"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./user/myfinalproject-e7dcb-firebase-adminsdk-3l7zm-9091802fc2.json"); // replace with the path to your downloaded Firebase project credentials JSON file

const {
  getAllRecipes,
  getRecipeById,
  getRandomRecipes,
  getRecipeNames,
  createUser,
  addToFavoriteRecipe,
  getDashboardByEmail,
  removeFromFavoriteRecipe,
} = require("./handlers");

const port =8000;

const app = express();

// Setting firebase 

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-3l7zm@myfinalproject-e7dcb.iam.gserviceaccount.com", // replace with your Firebase project URL
});

app


  .use(express.static("server/asset"))
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .use(morgan("tiny"))
  .use(express.json())
  .use(cors())


  .get("/api/user/id/:email", getDashboardByEmail)
  .get("/api/recipes/names", getRecipeNames)
  .get("/api/recipes", getAllRecipes)
  .get("/api/recipes/:_id", getRecipeById)
  .get("/api/random-recipes", getRandomRecipes) 
  .post("/api/user", createUser)
  .post("/api/user/favorite",addToFavoriteRecipe)
  .delete("/api/user/favorite/:id", removeFromFavoriteRecipe)
  
  .get("/test", (req, res) => {
    res.status(200).json({ itWorked: true });
  })
  .get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  })
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })


  //
 
  
  .listen(port, () => console.log(`Listening on port ${port}`));
