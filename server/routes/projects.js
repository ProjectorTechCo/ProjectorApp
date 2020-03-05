const express = require("express");
const GenericEntity = require("./../generic_entity");
const router = express.Router();
const PROJECTS = "comp_projects";

let genericEntity = new GenericEntity(PROJECTS);

router.get('/:proj_id?', genericEntity.selectAll("proj_id"));

module.exports = router;

