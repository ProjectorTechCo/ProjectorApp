const express = require("express");
const GenericEntity = require("../../../ProjectorEntityQuerier/generic_entity");
const entityQuerier = require("./entity_querier");
const router = express.Router();
const PROJECTS = "projects";

router.get('/:proj_id?', (req, res) => {
    entityQuerier.action(PROJECTS, entityQuerier.GET).then(response => {
        res.status(200).json(response.data);
    }).catch(e => {
        console.log(e.message);
        res.status(500).send("Server error");
    });
});
// router.get("", genericEntity.selectByCondition);
// router.post('/', genericEntity.create);
// router.put('/', genericEntity.update);
// router.delete('/', genericEntity.delete);

module.exports = router;

