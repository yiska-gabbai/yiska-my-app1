const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ 
    message: "My Personal CI/CD Pipeline Demo", 
    student: "Software Engineering Track" 
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    system: "Operational" 
  });
});

if (require.main === module) {
  app.listen(3000, "0.0.0.0", () => {
    console.log("Custom server listening on port 3000");
  });
}

module.exports = app;