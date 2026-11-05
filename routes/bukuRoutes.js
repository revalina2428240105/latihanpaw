const express = require('express');
const router = express.Router();

const bukuControllers = require('../controllers/bukuControllers');

router.post('/', bukuControllers.create);
router.get('/', bukuControllers.getAll);
router.get('/:id', bukuControllers.getById);
router.put('/:id', bukuControllers.update);
router.delete('/:id', bukuControllers.remove);

module.exports = router;