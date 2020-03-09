const express = require("express");
const GenericEntity = require("../../../ProjectorEntityQuerier/generic_entity");
const router = express.Router();
const ENTREPRENEURS = "comp_contractors";

let genericEntity = new GenericEntity(ENTREPRENEURS);

router.get('/:cont_ids?', genericEntity.selectAll("cont_id"));

module.exports = router;

