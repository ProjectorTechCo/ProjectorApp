const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const projectsRoutes = require("./routes/projects");
const buildingsRoutes = require("./routes/buildings");
const applicationsRoutes = require("./routes/applications");
const entrepreneursRoutes = require("./routes/entrepreneurs");
const contractorsRoutes = require("./routes/contractors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/projects', projectsRoutes);
app.use('/buildings', buildingsRoutes);
app.use('/applications', applicationsRoutes);
app.use('/entrepreneurs', entrepreneursRoutes);
app.use('/contractors', contractorsRoutes);

app.use("/", express.static(path.join(__dirname+"/../src/views")));
app.use("/images", express.static(path.join(__dirname+"/../src/images")));
app.use("/fonts", express.static(path.join(__dirname+"/../src/fonts")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+"/../src/views/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
