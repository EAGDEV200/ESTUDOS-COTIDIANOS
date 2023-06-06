const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

router.get('/', planController.listar);
router.post('/', planController.salvar);
router.put('/:id', planController.atualizar);


module.exports = router;