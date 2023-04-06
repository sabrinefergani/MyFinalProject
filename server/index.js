"use strict";


// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const path = require('path');

const {
  getAllRecipes,
  getRecipeById, 
  getRandomRecipes,
  getRecipeNames,
} = require("./handlers");

const port = 8000;

const app = express();

app
.use(express.static("server/asset"))
 
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

.use(morgan("tiny"))
.use(express.json())
.use(cors())

.get('/api/recipes/names', getRecipeNames)
.get("/api/recipes", getAllRecipes)
.get("/api/recipes/:_id", getRecipeById)
.get('/api/random-recipes',getRandomRecipes)

.get("/test", (req, res) => {
  res.status(200).json({itWorked: true})
})

.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
})

.listen(port, () => console.log(`Listening on port ${port}`))