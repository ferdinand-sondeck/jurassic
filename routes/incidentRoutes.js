const express = require('express');
const router = express.Router();
const IncidentController = require('../controllers/IncidentController');

router.get('/', IncidentController.getAll);
router.get('/:id', IncidentController.getById);
router.post('/', IncidentController.create);
router.put('/:id', IncidentController.update);
router.delete('/:id', IncidentController.delete); // Bonus

module.exports = router;