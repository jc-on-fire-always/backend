require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const flashcardRoutes = require("./routes/FlashCardRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/flashcards", flashcardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
