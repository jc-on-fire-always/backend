const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "flashcard_db", // Replace with your database name
  dialect: "mysql", // or 'postgres', 'sqlite', etc.
  port: process.env.DB_PORT || 3306, // Default MySQL port is 3306
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
