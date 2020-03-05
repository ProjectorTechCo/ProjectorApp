const express = require("express");
const GenericEntity = require("./../generic_entity");
const router = express.Router();
const APPLICATIONS = "comp_apps";

let genericEntity = new GenericEntity(APPLICATIONS);

router.get('/:app_id?', genericEntity.selectAll("app_id"));

module.exports = router;

