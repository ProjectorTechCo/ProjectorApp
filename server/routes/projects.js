const express = require("express");
const entityQuerier = require("./entity_querier");
const router = express.Router();
const PROJECTS = "projects";

router.get('/', entityQuerier.getQuery(PROJECTS));
// router.post('/', genericEntity.create);
// router.put('/', genericEntity.update);
// router.delete('/', genericEntity.delete);

module.exports = router;

