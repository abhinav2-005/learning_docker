// Import express
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Route to send a message
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Route to receive and return a message
app.post("/message", (req, res) => {
  const { msg } = req.body;  // expecting { "msg": "your message" }
  res.send(`Server received: ${msg}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
