const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// mockData must export valid data
const resList = require("./utils/mockData");

app.use(cors());

app.get("/api/data", (req, res) => {
  try {
    res.json(resList);  // Make sure resList is valid
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: "Failed to load data" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
