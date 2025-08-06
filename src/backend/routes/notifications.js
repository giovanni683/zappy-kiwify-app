const express = require('express');
const router = express.Router();
const controller = require('../controllers/notificationsController');

// Listar todas
router.get('/', controller.getAllNotifications);
// Buscar por ID
router.get('/:id', controller.getNotificationById);
// Criar nova
router.post('/', controller.createNotification);
// Atualizar tudo
router.put('/:id', controller.updateNotification);
// Atualizar status
router.patch('/:id/status', controller.updateNotificationStatus);

module.exports = router;
