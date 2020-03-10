const express = require("express");
const router = express.Router();

const entityQuerier = require("./entity_querier");
const APARTMENTS = "apps";

router.get('/', entityQuerier.getQuery(APARTMENTS));

module.exports = router;

