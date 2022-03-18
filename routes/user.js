const express = require("express");
const router = express.Router();

const usersController = require('../controllers/usersController');
const userValidator = require('../validations/userValidator');
const jwtToken = require("../jwtValidation");

router.get('/user', jwtToken.validateToken, userValidator.id, usersController.getUser);
router.get('/users',  jwtToken.validateToken, usersController.getUsers);
router.post('/user', userValidator.add, usersController.postUser);
router.post('/login', userValidator.id, usersController.getLogin);
router.put('/user', userValidator.update, usersController.putUser);
router.delete('/user',userValidator.id, usersController.deleteUser);

module.exports = router;