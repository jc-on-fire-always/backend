const express = require("express");
const router = express.Router();
const flashcardController = require("../controllers/FlashCardController");

// Fetch all flashcards
router.get("/", flashcardController.getAllFlashcards);

// Fetch a single flashcard by ID
router.get("/:id", flashcardController.getFlashcardById);

// Create a new flashcard
router.post("/", flashcardController.createFlashcard);

// Update a flashcard by ID
router.put("/:id", flashcardController.updateFlashcard);

// Delete a flashcard by ID
router.delete("/:id", flashcardController.deleteFlashcard);

module.exports = router;
