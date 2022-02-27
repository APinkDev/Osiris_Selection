const express = require("express");
const routes = express.Router();
const Sequelize = require("sequelize");
const { DietTypes, Recipe } = require("../db.js");
const { allRequest, askByName, AskByID, createFood } = require("../api.js");
const { default: axios } = require("axios");

routes.route("/recipes").get(async (req, res) => {
  let { title } = req.query;
  try {
    if (title !== undefined) {
      // console.log(title)
      let recipeSearch = []
      recipeSearch = await askByName(title);
      // console.log("recipe: ", recipeSearch)

      let dbSearch = await Recipe.findAll({
        where: {
          title: {
            [Sequelize.Op.iLike]: `${title}%`,
          },
        },
        include: DietTypes,
      });

      if (dbSearch.length !== 0) {

        let cont = dbSearch.map((e) => ({
          id: e.ID,
          title: e.title,
          image: e.image,
          dishTypes: e.dishTypes,
          cuisines: e.cuisines,
          summary: e.summary,
          readyInMinutes: e.readyInMinutes,
          pricePerServing: e.pricePerServing,
          spoonacularScore: e.spoonacularScore,
          veryPopular: e.veryPopular,
          healthScore: e.healthScore,
          vegetarian: e.vegetarian,
          vegan: e.vegan,
          glutenFree: e.glutenFree,
          diets: e.DietTypes.length === 0
            ? "no dietTypes" : e.DietTypes.map((e) => e.name),
          analyzedInstructions: e.analyzedInstructions,

        }));

        if (recipeSearch !== undefined && dbSearch.length !== 0) {
          // console.log("recipe:",recipeSearch)
          let arrays = []
          cont.map((e) => arrays.push(e))
          // arrays.push(recipeSearch.pop())
          // console.log("BBBBB", typeof (recipeSearch[0]))
          for (i = 0; i < recipeSearch.length; i++) {
            // if(typeof(recipeSearch[i]) == Object){}
            console.log("AAAAAAAAAA", typeof (recipeSearch[i]))
            arrays.push(recipeSearch.pop())
            i = i - 1

          }
          // console.log("arrays:", arrays)
          res.json(arrays)

        }

        if (recipeSearch === undefined && dbSearch.length !== 0) {
          res.json(cont)
        }
      }


      if (recipeSearch === undefined && dbSearch.length === 0) {
        return res.status(404).json("error 404")
      } else {
        return res.json(recipeSearch);
      }


    } else {
      let recipeSearch = await allRequest();
      let dbSearch = await Recipe.findAll({ include: { model: DietTypes } });
      let cont = dbSearch.map((e) => ({
        id: e.id,
        title: e.title,
        image: e.image,
        dishTypes: e.dishTypes,
        cuisines: e.cuisines,
        summary: e.summary,
        readyInMinutes: e.readyInMinutes,
        pricePerServing: e.pricePerServing,
        spoonacularScore: e.spoonacularScore,
        veryPopular: e.veryPopular,
        healthScore: e.healthScore,
        vegetarian: e.vegetarian,
        vegan: e.vegan,
        glutenFree: e.glutenFree,
        diets: e.DietTypes.length === 0
          ? "no dietTypes" : e.DietTypes.map((e) => e.name),
        analyzedInstructions: e.analyzedInstructions,
      }));
      cont.map((e) => recipeSearch.push(e))
      // recipeSearch.push(cont);
      res.json(recipeSearch);
    }
  } catch (e) {
    console.log(e)
  }
});

routes.route("/recipes/:id").get(async (req, res) => {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  try {
    const { id } = req.params;
    if (!Number.isNaN(Number(id))) {
      let Recipez = await AskByID(id);
      res.json(Recipez);
    } else {
      let db = await Recipe.findOne({
        where: { ID: id },
        include: { model: DietTypes },
      });
      res.json(db);
    }
  } catch (err) {
    console.log(err);
  }
});

routes.route("/diets").get(async (req, res) => { //for in es para objetos y map es para arreglos
  let check = await DietTypes.findAll();

  if (check.length === 0) {
    let tempApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=dcee4336578148799c63a2c68cef170a&addRecipeInformation=true`)
    // console.log(tempApi)
    var tempList = await tempApi.data.results
      .map((n) => n.diets)
      .join()
      .split(", ")
      .join()
      .split(",")
    console.log(tempList)
    for (i = 0; i < tempList.length; i++) {
      await DietTypes.findOrCreate({
        where: { name: tempList[i] }
      })
    }
  }
  let temp = await DietTypes.findAll();
  res.json(temp)
})

routes.route("/dishtypes").get(async (req, res) => {
  let tempApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=dcee4336578148799c63a2c68cef170a&addRecipeInformation=true`)
  var tempList = await tempApi.data.results
    .map((n) => n.dishTypes)
    .join()
    .split(", ")
    .join()
    .split(",")
  // console.log(tempList)

  let uniqueArray = [...new Set(tempList)]

  // console.log("arreglO!", uniqueArray)
  res.json(uniqueArray)
})

routes.route("/cuisines").get(async (req, res) => {
  let tempApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=dcee4336578148799c63a2c68cef170a&addRecipeInformation=true`)
  var tempList = await tempApi.data.results
    .map((n) => n.cuisines)
    .join()
    .split(", ")
    .join()
    .split(",")

  let uniqueArray = [...new Set(tempList)]

  res.json(uniqueArray)
})

routes.post("/create", createFood);

module.exports = routes;
