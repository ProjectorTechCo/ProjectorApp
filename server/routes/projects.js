const express = require("express");
const PgInstance = require("./../PgInstance");

const router = express.Router();
const PROJECTS = "comp_projects";

router.get('/:proj_id?', async (req, res) => {
    let { proj_id } = req.params;
    let query = `SELECT * FROM ${PROJECTS}`;
    if (proj_id)
        query += ` WHERE proj_id = ${proj_id}`;
    let {status, message} = await PgInstance.action(query);
    res.status(status).json(message);
});

module.exports = router;

