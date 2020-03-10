const express = require("express");
const router = express.Router();

const entityQuerier = require("./entity_querier");
const ENTREPRENEURS = "entrepreneurs";

router.get('/', entityQuerier.getQuery(ENTREPRENEURS));

module.exports = router;

