const express = require("express");
const PgInstance = require("./../PgInstance");

const router = express.Router();

router.get('/', async (req, res) => {
    let {status, message} = await PgInstance.action("SELECT * FROM comp_projects");
    res.status(status).json(message);
});

module.exports = router;

