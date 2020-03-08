const express = require("express");
const GenericEntity = require("./../generic_entity");
const router = express.Router();
const RESOURCES = "comp_resources";

let genericEntity = new GenericEntity(RESOURCES);

router.get('/:res_id?', genericEntity.selectAll("res_id"));

module.exports = router;

