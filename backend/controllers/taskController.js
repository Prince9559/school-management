const db = require("../config/db");

// ✅ Add Task
exports.addTask = (req, res) => {
  let { title, student_id } = req.body;

  // 🔥 Convert to number (important)
  student_id = Number(student_id);

  // 🔥 Validation
  if (!title || !student_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // 🔥 Check student exists
  db.query(
    "SELECT * FROM students WHERE id = ?",
    [student_id],
    (err, result) => {
      if (err) {
        console.log("Check Error:", err);
        return res.status(500).json({ error: err.message });
      }

      if (result.length === 0) {
        return res.status(400).json({ message: "Student not found" });
      }

      // 🔥 Insert Task
      db.query(
        "INSERT INTO tasks (title, student_id) VALUES (?, ?)",
        [title, student_id],
        (err) => {
          if (err) {
            console.log("Insert Error:", err); // 👈 important debug
            return res.status(500).json({ error: err.message });
          }
          res.json({ message: "Task Assigned" });
        }
      );
    }
  );
};

// ✅ Get Tasks (with student name)
exports.getTasks = (req, res) => {
  const sql = `
    SELECT tasks.*, students.name 
    FROM tasks 
    JOIN students ON tasks.student_id = students.id
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Fetch Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

// ✅ Mark Complete
exports.completeTask = (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE tasks SET completed = true WHERE id=?",
    [id],
    (err) => {
      if (err) {
        console.log("Update Error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Completed" });
    }
  );
};