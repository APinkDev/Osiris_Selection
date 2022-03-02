const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Recipe", {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
    dishTypes: {
      type: DataTypes.TEXT,
    },
    cuisines: {
      type: DataTypes.TEXT,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    readyInMinutes: {
      type: DataTypes.FLOAT,
    },
    pricePerServing: {
      type: DataTypes.FLOAT,
    },
    spoonacularScore: {
      type: DataTypes.FLOAT,
    },
    veryPopular: {
      type: DataTypes.BOOLEAN,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
    },
    glutenFree: {
      type: DataTypes.BOOLEAN,
    },
    analyzedInstructions: {
      type: DataTypes.TEXT
    }

  });
};
