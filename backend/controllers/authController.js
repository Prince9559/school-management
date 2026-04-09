const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") 
    {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, 
    {
      expiresIn: "1h",
    });

    res.json({ token });
  } 
  else 
  {
    res.status(401).json({ message: "Invalid credentials" });
  }
};