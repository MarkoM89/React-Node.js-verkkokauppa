const express = require("express");
const cors = require("cors");

const PORT = 3001;
const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Verkkokaupan palvelin" });
});

app.listen(PORT, () => {
  console.log(`Palvelin kuuntelee porttia ${PORT}`);
});
