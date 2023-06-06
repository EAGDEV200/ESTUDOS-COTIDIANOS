const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.listar);
router.post('/', userController.salvar);
router.get('/:id', userController.buscarPorId);
router.put('/:id', userController.atualizar);
router.delete('/:id', userController.excluir);

module.exports = router;