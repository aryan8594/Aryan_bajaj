const express = require("express");

const app = express();

app.use(express.json());

let PORT = process.env.PORT || 3000;

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data) {
    res.status(400).json({ is_success: false, message: "Data is empty" });
  }

  const data_alphabets = data.filter((str) => /^[a-zA-Z]$/.test(str));
  const data_numbers = data.filter((str) => /^[0-9]+$/.test(str));
  const maxUnicode = Math.max(
    ...data_alphabets.map((e) => e.toLowerCase().charCodeAt(0))
  );
  const maxCharacter = String.fromCharCode(maxUnicode);

  const response = {
    is_success: true,
    user_id: "Aryan859",
    email: "ad2777@srmist.edu.in",
    roll_number: "RA2011004010217",
    numbers: data_numbers,
    alphabets: data_alphabets,
    highest_alphabet: [maxCharacter],
  };

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log("Server at PORT", PORT);
});

module.exports = app;
