const db = require("../config/db");

exports.addStudent = (req, res) => {
  const { name, className } = req.body;
  db.query(
    "INSERT INTO students (name, class) VALUES (?, ?)",
    [name, className],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Student Added" });
    }
  );
};

exports.getStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, className } = req.body;

  db.query(
    "UPDATE students SET name=?, class=? WHERE id=?",
    [name, className, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Updated" });
    }
  );
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM students WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted" });
  });
};