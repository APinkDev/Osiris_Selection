const { default: axios } = require("axios");
const { Recipe } = require("./db.js");
const { DietTypes } = require("./db.js");
//0892681e63aa40408b5c947b8cc02a41
//def5528726714b01b470f80fdc78405c
//0892681e63aa40408b5c947b8cc02a41
//4bc14c003b50492b94515a76c80545c2
//4bc14c003b50492b94515a76c80545c2


module.exports = {
  allRequest: async () => {
    try {
      let cont = axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=0892681e63aa40408b5c947b8cc02a41&addRecipeInformation=true`
        )
        .then((resultado) => resultado.data.results)
        .then((res) => {
          let storage = [];
          res.map((result) =>
            storage.push({
              id: result.id,
              title: result.title,
              image: result.image,
              dishTypes: result.dishTypes,
              cuisines: result.cuisines.length === 0 ? ["no cuisines yet"] : result.cuisines,
              summary: result.summary,
              readyInMinutes: result.readyInMinutes,
              pricePerServing: result.pricePerServing,
              spoonacularScore: result.spoonacularScore,
              veryPopular: result.veryPopular,
              healthScore: result.healthScore,
              vegetarian: result.vegetarian,
              vegan: result.vegan,
              glutenFree: result.glutenFree,
              diets: result.diets,
              analyzedInstructions: result.analyzedInstructions[0]?.steps.map((e)=>e.step)
            })
          );
          return storage;
        });
      return cont;
    } catch (e) {
      console.log(e);
    }
  },

  askByName: async (title) => {
    let cont = axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=0892681e63aa40408b5c947b8cc02a41&addRecipeInformation=true`)
      .then((resultado) => (resultado = resultado.data.results))
      .then((resort) => {
        let comida = [];
        resort.map((elm) =>
          comida.push({
            id: elm.id,
            title: elm.title,
            image: elm.image,
            dishTypes: elm.dishTypes,
            cuisines: elm.cuisines.length === 0 ? ["no cuisines yet"] : elm.cuisines,
            summary: elm.summary,
            readyInMinutes: elm.readyInMinutes,
            pricePerServing: elm.pricePerServing,
            spoonacularScore: elm.spoonacularScore,
            veryPopular: elm.veryPopular,
            healthScore: elm.healthScore,
            vegetarian: elm.vegetarian,
            vegan: elm.vegan,
            glutenFree: elm.glutenFree,
            diets: elm.diets,
            analyzedInstructions: elm.analyzedInstructions[0]?.steps.map((e)=>e.step)
          })
        )

        if (title !== null || title !== undefined) {
          var foods = comida.filter((elm) => elm.title.includes(title));
          // console.log("foods", comida)
          return foods
        }
      })
    return cont
  },

  AskByID: (id) => {
    let cont = axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=0892681e63aa40408b5c947b8cc02a41`
      )
      .then((result) => (result = result.data))
      // .then((result) => (console.log(result)))
      .then((result) => {
        for (property in result) {
          return {
            id: result.id,
            title: result.title,
            image: result.image,
            dishTypes: result.dishTypes,
            cuisines: result.cuisines.length === 0 ? ["no cuisines yet"] : result.cuisines,
            summary: result.summary,
            readyInMinutes: result.readyInMinutes,
            pricePerServing: result.pricePerServing,
            spoonacularScore: result.spoonacularScore,
            veryPopular: result.veryPopular,
            healthScore: result.healthScore,
            vegetarian: result.vegetarian,
            vegan: result.vegan,
            glutenFree: result.glutenFree,
            diets: result.diets,
            analyzedInstructions: result.analyzedInstructions[0]?.steps.map((e)=>e.step)
          };
        }
        return property;
      });
    return cont;
  },

  async createFood(req, res) {
    let { title, image, dishTypes, cuisines, summary, readyInMinutes, pricePerServing, spoonacularScore,
      veryPopular, healthScore, vegetarian, analyzedInstructions, vegan, glutenFree, name } = req.body; //analyzedInstructions
    dishTypes = dishTypes.join(", ")
    cuisines = cuisines.join(", ")
    analyzedInstructions = analyzedInstructions.join("||| ")
    // console.log("AAAAAAAAAA", dishTypes)

    try {
      const [key, value] = await Recipe.findOrCreate({ // value es un booleano que indica si encontro o no una cosa devolviendo true o false 
        where: { title }, //(en este caso, si encontro title, true)y key es el objeto en cuestion que observara value
        defaults: {
          image,
          dishTypes,
          cuisines,
          summary,
          readyInMinutes,
          pricePerServing,
          spoonacularScore,
          veryPopular,
          healthScore,
          vegetarian,
          vegan,
          glutenFree,
          analyzedInstructions,
        },
      })
      const typos = await DietTypes.findAll({
        where: { name },
      })
      await key.addDietTypes(typos);
      res.json(key)
    } catch (e) {
      console.log("error", e)
    }
  },
};
