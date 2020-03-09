const express = require("express");
const GenericEntity = require("../../../ProjectorEntityQuerier/generic_entity");
const router = express.Router();
const APARTMENTS = "comp_apps";

let genericEntity = new GenericEntity(APARTMENTS);

router.get('/:app_id?', genericEntity.selectAll("app_id"));

module.exports = router;

