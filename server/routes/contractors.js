const express = require("express");
const router = express.Router();

const entityQuerier = require("./entity_querier");
const CONTRACTORS = "contractors";

router.get('/', entityQuerier.getQuery(CONTRACTORS));

module.exports = router;

