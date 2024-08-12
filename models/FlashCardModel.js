const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Flashcard = sequelize.define("Flashcard", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => console.log("Flashcard table created successfully"))
  .catch((err) => console.log("Error: " + err));

module.exports = Flashcard;
