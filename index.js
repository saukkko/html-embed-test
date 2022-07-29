import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("./html/"));
app.all("*", (req, res) => res.sendStatus(404));

app.listen(PORT);
