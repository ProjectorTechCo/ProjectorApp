const express = require("express");
const router = express.Router();

const entityQuerier = require("./entity_querier");
const RESOURCES = "resources";

router.get('/', entityQuerier.getQuery(RESOURCES));

module.exports = router;

