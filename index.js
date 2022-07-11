// Add Express
const express = require("express");

// Initialize Express
const app = express();

const cors = require("cors");
app.use(cors());

const employees = require("./api/employees");

// Create GET request
app.use("/api/employees", employees);

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
