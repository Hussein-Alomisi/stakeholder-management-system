const express = require("express");
const cors = require("cors");

const stakeholderRoutes = require("./routes/stakeholders");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stakeholders", stakeholderRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});