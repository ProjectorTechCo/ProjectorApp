const express = require("express");
const GenericEntity = require("./../generic_entity");
const router = express.Router();
const BUILDINGS = "comp_buildings";

let genericEntity = new GenericEntity(BUILDINGS);

router.get('/:build_id?', genericEntity.selectAll("build_id"));

module.exports = router;

