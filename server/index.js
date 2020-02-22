const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", express.static(path.join(__dirname+"/../src/views")));
app.use("/images", express.static(path.join(__dirname+"/../src/images")));
app.use("/fonts", express.static(path.join(__dirname+"/../src/fonts")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+"/../src/views/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
