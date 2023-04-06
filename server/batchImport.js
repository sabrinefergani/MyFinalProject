const recipes = require("./data/recipes.json");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const MONGO_URI =
  "mongodb+srv://sabrinefergani:motdepasse@cluster0.zi0d2mf.mongodb.net/recipe?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("recipe");
    console.log("Connected to MongoDB");

    const recipesData = recipes.map((recipe) => {
      return {
        name: recipe.name,
        title: recipe.title,
        ingredient: recipe.ingredient,
        preparation: recipe.preparation, 
        time: recipe.time,
        portions: recipe.portions,
        nutritional_value: recipe.nutritional_value,
        restriction: recipe.restriction, 
        dietary_preference: recipe.dietary_preference,
        photo: recipe.photo,
      };
    });

    await db.collection("recipes").insertMany(recipesData);
    console.log("Recipes uploaded data into MongoDB");
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

batchImport();
