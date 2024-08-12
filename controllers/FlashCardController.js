// backend/controllers/flashcardController.js
const Flashcard = require("../models/FlashCardModel");

exports.getAllFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.findAll();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: "Error fetching flashcards" });
  }
};

exports.createFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFlashcard = await Flashcard.create({ question, answer });
    res.json(newFlashcard);
  } catch (error) {
    res.status(500).json({ error: "Error adding flashcard" });
  }
};

exports.updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  try {
    const flashcard = await Flashcard.findByPk(id);
    if (!flashcard) {
      return res.status(404).send("Flashcard not found");
    }
    flashcard.question = question;
    flashcard.answer = answer;
    await flashcard.save();
    res.json(flashcard);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// Fetch a flashcard by ID
exports.getFlashcardById = async (req, res) => {
  const { id } = req.params;
  try {
    const flashcard = await Flashcard.findByPk(id);
    if (!flashcard) {
      return res.status(404).json({ error: "Flashcard not found" });
    }
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ error: "Error fetching flashcard" });
  }
};

exports.deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  try {
    const flashcard = await Flashcard.findByPk(id);
    if (!flashcard) {
      return res.status(404).send("Flashcard not found");
    }
    await flashcard.destroy();
    res.send("Flashcard deleted");
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
