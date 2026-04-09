const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  addTask,
  getTasks,
  completeTask,
} = require("../controllers/taskController");

router.post("/", auth, addTask);
router.get("/", auth, getTasks);
router.put("/:id", auth, completeTask);

module.exports = router;