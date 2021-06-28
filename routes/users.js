const express = require('express');
const users = require('../controllers/users');

const router = express.Router();

router.get('/', users.getUsers);
router.get('/:id', users.getUserById);
router.post('/', users.createuser);
router.patch('/:id', users.updateuser);
router.delete('/:id', users.deleteuser);

module.exports = router;
