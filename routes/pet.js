const express = require("express");
const router = express.Router();
const petsController = require('../controllers/petsController');
router.get('/pet', petsController.getPet);
router.get('/pets', petsController.getPets);
router.post('/pet', petsController.postPet);
router.put('/pet', petsController.putPet);
router.delete('/pet', petsController.deletePet);

module.exports = router;