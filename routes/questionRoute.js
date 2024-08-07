// const express = require("express");
// const router = express.Router();
// const {
//   getAllQuestions,
//   getQuestionById,
//   postQuestion,
// } = require("../controller/questionController");
// const authMiddleware = require("../middleware/authMiddleware");

// router.get("/questions", getAllQuestions);
// router.get("/questions/:id", getQuestionById); // Update to match the frontend URL parameter
// router.post("/questions", authMiddleware, postQuestion);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
	getAllQuestions,
	getQuestionById,
	postQuestion,
	deleteQuestion, // Add this line
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/questions", getAllQuestions);
router.get("/questions/:id", getQuestionById); // Update to match the frontend URL parameter
router.post("/questions", authMiddleware, postQuestion);
router.delete("/questions/:id", authMiddleware, deleteQuestion); // Add this line

module.exports = router;
