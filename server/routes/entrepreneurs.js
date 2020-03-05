const express = require("express");
const GenericEntity = require("./../generic_entity");
const router = express.Router();
const ENTREPRENEURS = "comp_entrepreneurs";

let genericEntity = new GenericEntity(ENTREPRENEURS);

router.get('/:ent_ids?', genericEntity.selectAll("ent_id"));

module.exports = router;

