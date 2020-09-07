const express = require('express');
const constraintssubgroupController = require('../controllers/constraintssubgroupController');

const router = express.Router();

router
	.route('/')
	.post(constraintssubgroupController.createConstraintsSubGroup)
	.get(constraintssubgroupController.getAllConstraintsSubGroups);

router
	.route('/:id')
	.get(constraintssubgroupController.getConstraintsSubGroup)
	.patch(constraintssubgroupController.updateConstraintsSubGroup)
	.delete(constraintssubgroupController.deleteConstraintsSubGroup);

module.exports = router;
