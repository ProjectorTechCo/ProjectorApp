const express = require("express");
const GenericEntity = require("./../generic_entity");
const router = express.Router();
const PROJECTS = "comp_projects";

let genericEntity = new GenericEntity(PROJECTS);

router.get('/:proj_id?', genericEntity.selectAll("proj_id"));
router.get("", genericEntity.selectByCondition);
router.post('/', genericEntity.create);
router.put('/', genericEntity.update);
router.delete('/', genericEntity.delete);

module.exports = router;

