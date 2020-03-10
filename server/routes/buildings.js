const express = require("express");
const entityQuerier = require("./entity_querier");
const router = express.Router();
const BUILDINGS = "buildings";

router.get("/", entityQuerier.getQuery(BUILDINGS));

module.exports = router;

