const express = require("express");
const cors = require("cors");
const db = require("./Config/db");

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
db();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/user", require("./routers/CreateUser"));
app.use("/api/user", require("./routers/Display"));
app.use("/api/user", require("./routers/Order"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
